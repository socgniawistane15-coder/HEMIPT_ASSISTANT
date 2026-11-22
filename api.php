<?php
/**
 * HEMIPT Assistant — OpenAI API Proxy
 *
 * SETUP (NameCheap shared hosting):
 *   1. Place this file alongside index.html in your web folder.
 *   2. Create hemipt_config.php ONE DIRECTORY ABOVE public_html, e.g.:
 *        /home/yourusername/hemipt_config.php
 *      (This path is not reachable by any browser request.)
 *   3. In script.js set USE_PROXY = true.
 *   4. Done — the key never touches the browser.
 */

header('Content-Type: application/json; charset=utf-8');

// ── CORS ──────────────────────────────────────────────────────────────────
// Only accept requests from your own domain. Add localhost for local PHP testing.
$allowed = [
    'https://hemiptuniversity.com',
    'https://assistant.hemiptuniversity.com',
    'http://localhost',
    'http://127.0.0.1',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

// ── Rate limiting (file-based, per IP) ────────────────────────────────────
define('RATE_WINDOW', 60);   // seconds
define('RATE_MAX',    20);   // requests per window per IP

$ip_hash  = md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rl_file  = sys_get_temp_dir() . '/hemipt_rl_' . $ip_hash;

$rl = file_exists($rl_file)
    ? (json_decode(file_get_contents($rl_file), true) ?? [])
    : [];

if (!empty($rl) && (time() - ($rl['t'] ?? 0)) < RATE_WINDOW) {
    if (($rl['n'] ?? 0) >= RATE_MAX) {
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests — please wait a moment.']);
        exit;
    }
    $rl['n']++;
} else {
    $rl = ['t' => time(), 'n' => 1];
}
file_put_contents($rl_file, json_encode($rl), LOCK_EX);

// ── Load API key from config above web root ────────────────────────────────
// Works for both main domain (/public_html) and subdomains (/public_html/assistant)
// by stripping everything from 'public_html' onwards to find the home directory.
$homeDir = preg_replace('/\/public_html.*$/', '', $_SERVER['DOCUMENT_ROOT']);
$config  = $homeDir . '/hemipt_config.php';
if (!file_exists($config)) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration not found.']);
    exit;
}
require $config;

if (empty($openai_key)) {
    http_response_code(500);
    echo json_encode(['error' => 'API key not configured on the server.']);
    exit;
}

// ── Validate request body ──────────────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);

if (
    !is_array($body) ||
    !isset($body['messages']) ||
    !is_array($body['messages']) ||
    count($body['messages']) === 0
) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body.']);
    exit;
}

// Strip anything that is not role/content to avoid prompt injection via the request
$messages = array_map(function ($m) {
    return [
        'role'    => in_array($m['role'] ?? '', ['system', 'user', 'assistant'], true)
                     ? $m['role'] : 'user',
        'content' => substr((string)($m['content'] ?? ''), 0, 4000),
    ];
}, $body['messages']);

// ── Forward to OpenAI ──────────────────────────────────────────────────────
$payload = json_encode([
    'model'       => 'openai/gpt-oss-20b',
    'messages'    => $messages,
    'max_tokens'  => 600,
    'temperature' => 0.7,
]);

$ch = curl_init('https://api.groq.com/openai/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $openai_key,
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT    => 30,
]);

$response    = curl_exec($ch);
$http_status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error  = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(502);
    echo json_encode(['error' => 'Could not reach OpenAI. Please try again.']);
    exit;
}

http_response_code($http_status);
echo $response;
