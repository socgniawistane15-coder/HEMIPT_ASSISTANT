// =============================================================
//  HEMIPT Assistant — unit tests
//  Run with:  node tests/test.js   (no build tools required)
// =============================================================
"use strict";

// ---- minimal DOM mock ------------------------------------------------
function mockEl() {
  return {
    value: "en", disabled: false, placeholder: "", textContent: "",
    innerHTML: "", className: "", type: "", href: "", target: "",
    rel: "", alt: "", src: "", scrollTop: 0, scrollHeight: 0, clientTop: 0,
    _ch: [],
    appendChild(c)   { this._ch.push(c); return c; },
    removeChild(c)   { const i = this._ch.indexOf(c); if (i > -1) this._ch.splice(i, 1); },
    contains(c)      { return this._ch.includes(c); },
    replaceChildren(){ this._ch = []; },
    setAttribute()   {},
    removeAttribute(){},
    addEventListener(){},
    getBoundingClientRect() { return { top: 0 }; },
    classList: { add(){}, remove(){}, contains(){ return false; } },
    scrollTo()  {},
    get children() { return this._ch; },
  };
}

global.document = {
  getElementById:  () => mockEl(),
  querySelector:   () => mockEl(),
  documentElement: { lang: "en" },
  createElement:   (tag) => { const el = mockEl(); el.tag = tag; return el; },
  createTextNode:  (t)   => ({ nodeType: 3, textContent: t }),
  addEventListener: () => {},
};
global.window              = {};
global.requestAnimationFrame = () => {};
global.getComputedStyle    = () => ({ paddingTop: "20px" });
global.navigator           = { clipboard: { writeText: () => Promise.resolve() } };
global.localStorage        = {
  _s: {},
  getItem(k)    { return this._s[k] || null; },
  setItem(k, v) { this._s[k] = v; },
  removeItem(k) { delete this._s[k]; },
};
global.fetch = () => Promise.resolve({
  ok:   true,
  json: () => Promise.resolve({ choices: [{ message: { content: "test" } }] }),
});

// ---- load script, expose pure functions via global ------------------
const fs   = require("fs");
const path = require("path");
const src  = fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8");

// Append a shim that assigns the pure functions to global so they
// survive outside of the eval scope.
const shimmed = src + `
if (typeof global !== "undefined") {
  global.__hemipt = { normalize, findAnswer, linkify, knowledge, intents };
}
`;

try { eval(shimmed); } catch (_) { /* DOM calls during init may throw — that is OK */ }

if (!global.__hemipt) {
  console.error("FATAL: could not load functions from script.js — check the DOM mock");
  process.exit(1);
}

const { normalize, findAnswer, linkify, knowledge } = global.__hemipt;

// ---- tiny test runner -----------------------------------------------
let pass = 0, fail = 0;

function test(label, fn) {
  try {
    fn();
    pass++;
    process.stdout.write(`  \u2713 ${label}\n`);
  } catch (e) {
    fail++;
    process.stderr.write(`  \u2717 ${label}\n    ${e.message}\n`);
  }
}

function expect(val) {
  return {
    toBe(exp) {
      if (val !== exp)
        throw new Error(`expected ${JSON.stringify(exp)}, got ${JSON.stringify(val)}`);
    },
    not: {
      toBe(exp) {
        if (val === exp)
          throw new Error(`expected NOT to be ${JSON.stringify(exp)}`);
      },
    },
    toContain(exp) {
      if (!String(val).includes(String(exp)))
        throw new Error(`${JSON.stringify(val)} does not contain ${JSON.stringify(exp)}`);
    },
    toBeTruthy() {
      if (!val) throw new Error(`expected truthy, got ${JSON.stringify(val)}`);
    },
    toBeFalsy() {
      if (val) throw new Error(`expected falsy, got ${JSON.stringify(val)}`);
    },
  };
}

// =====================================================================
// 1. normalize()
// =====================================================================
console.log("\n1. normalize()");

test("lowercases input", () => {
  expect(normalize("HELLO WORLD")).toBe("hello world");
});

test("strips accents (French)", () => {
  expect(normalize("Frais de scolarité")).toBe("frais de scolarite");
});

test("removes punctuation", () => {
  expect(normalize("what's the fee?")).toBe("what s the fee");
});

test("collapses extra whitespace", () => {
  expect(normalize("  hello   world  ")).toBe("hello world");
});

test("handles empty string", () => {
  expect(normalize("")).toBe("");
});

test("handles null", () => {
  expect(normalize(null)).toBe("");
});

test("handles undefined", () => {
  expect(normalize(undefined)).toBe("");
});

test("preserves alphanumeric content", () => {
  expect(normalize("HND 2024")).toBe("hnd 2024");
});

test("strips curly apostrophes", () => {
  expect(normalize("bachelor\u2019s degree")).toBe("bachelor s degree");
});

// =====================================================================
// 2. findAnswer() — English intents
// =====================================================================
console.log("\n2. findAnswer() \u2014 English");

const FB = knowledge.en.fallback;

function notFallback(q) {
  const a = findAnswer(q);
  if (a === FB) throw new Error(`Got fallback for: "${q}"`);
}

function isIntent(q, key) {
  const a = findAnswer(q);
  if (a !== knowledge.en[key])
    throw new Error(
      `"${q}" \u2192 expected intent "${key}"\n  got: "${a.substring(0, 70)}..."`
    );
}

test('greeting: "hello"',              () => isIntent("hello", "greeting"));
test('greeting: "good morning"',       () => notFallback("good morning"));
test('fees: "how much are the school fees"', () => isIntent("how much are the school fees", "fees"));
test('fees: "how much does it cost"',  () => isIntent("how much does it cost", "fees"));
test('fees: "what is the price"',      () => notFallback("what is the price"));
test('registration: "how do I register"', () => isIntent("how do I register", "registration"));
test('registration: "how do I sign up"',  () => isIntent("how do I sign up", "registration"));
test('registration: "I want to enroll"',  () => notFallback("I want to enroll"));
test('campuses: "where is the school"',   () => isIntent("where is the school", "campuses"));
test('campuses: "school address"',        () => notFallback("school address"));
test('health: "nursing"',                 () => isIntent("nursing", "health"));
test('health: "pharmacy"',               () => notFallback("pharmacy"));
test('engineering: "software engineering"', () => isIntent("software engineering", "engineering"));
test('engineering: "computer science"',  () => notFallback("computer science"));
test('management: "accounting"',         () => notFallback("accounting"));
test('scholarship: "financial help"',    () => notFallback("financial help"));
test('scholarship: "bursary"',           () => notFallback("bursary"));
test('payment: "where do I pay my fees"', () => isIntent("where do I pay my fees", "payment"));
test('contacts: "phone number"',         () => notFallback("phone number"));
test('thanks: "thank you"',              () => isIntent("thank you", "thanks"));
test('fallback: empty string',           () => { expect(findAnswer("")).toBe(FB); });
test('fallback: gibberish',              () => { expect(findAnswer("xyzzy quux blorp")).toBe(FB); });

// stem matching
test('stem: "scholarships" → scholarship intent', () => notFallback("scholarships"));
test('stem: "campuses" → campus intent',          () => notFallback("campuses"));
test('stem: "registering" → registration intent', () => notFallback("registering"));

// =====================================================================
// 3. findAnswer() — French keywords
// =====================================================================
console.log("\n3. findAnswer() \u2014 French keywords");

test('FR fees: "frais de scolarite"',           () => notFallback("frais de scolarite"));
test('FR registration: "comment m inscrire"',   () => notFallback("comment m inscrire"));
test('FR campuses: "ou se trouve l ecole"',     () => notFallback("ou se trouve l ecole"));
test('FR greeting: "bonjour"',                  () => notFallback("bonjour"));
test('FR scholarship: "bourse"',                () => notFallback("bourse"));
test('FR fees: "combien coute la formation"',   () => notFallback("combien coute la formation"));
test('FR registration: "dossier d inscription"',() => notFallback("dossier d inscription"));

// =====================================================================
// 4. linkify()
// =====================================================================
console.log("\n4. linkify()");

function runLinkify(text) {
  const para = { _ch: [], appendChild(c) { this._ch.push(c); return c; } };
  linkify(para, text);
  return para._ch;
}

function linkNodes(text) {
  return runLinkify(text).filter(n => n.href !== undefined);
}

test("URL is converted to a link", () => {
  const links = linkNodes("Visit https://hemiptuniversity.com for info.");
  expect(links.length).toBe(1);
  expect(links[0].href).toBe("https://hemiptuniversity.com");
});

test("URL link opens in new tab", () => {
  const links = linkNodes("https://hemiptuniversity.com");
  expect(links[0].target).toBe("_blank");
});

test("URL link has rel=noopener", () => {
  const links = linkNodes("https://hemiptuniversity.com");
  expect(links[0].rel).toBe("noopener noreferrer");
});

test("email is converted to a mailto link", () => {
  const links = linkNodes("Email info@hemiptuniversity.com now.");
  expect(links.length).toBe(1);
  expect(links[0].href).toBe("mailto:info@hemiptuniversity.com");
});

test("phone +237 675 283 496 → tel link (spaces stripped)", () => {
  const links = linkNodes("Call +237 675 283 496.");
  expect(links[0].href).toBe("tel:+237675283496");
});

test("17-char phone +237 680 78 59 56 is not truncated", () => {
  const links = linkNodes("Magba: +237 680 78 59 56");
  expect(links[0].href).toBe("tel:+237680785956");
});

test("17-char phone +237 651 42 72 04 is not truncated", () => {
  const links = linkNodes("Contact: +237 651 42 72 04");
  expect(links[0].href).toBe("tel:+237651427204");
});

test("plain text before a URL is preserved as a text node", () => {
  const nodes = runLinkify("Visit https://hemiptuniversity.com now.");
  expect(nodes[0].textContent).toContain("Visit ");
});

test("plain text after a URL is preserved as a text node", () => {
  const nodes = runLinkify("Visit https://hemiptuniversity.com now.");
  expect(nodes[nodes.length - 1].textContent).toContain(" now.");
});

test("plain text with no patterns returns a single text node", () => {
  const nodes = runLinkify("This is plain text.");
  expect(nodes.length).toBe(1);
  expect(nodes[0].textContent).toBe("This is plain text.");
});

test("XSS: <script> tag is NOT turned into a link", () => {
  const links = linkNodes("<script>alert(1)</script>");
  expect(links.length).toBe(0);
});

test("multiple patterns in one string all become links", () => {
  const links = linkNodes(
    "Web: https://hemiptuniversity.com | Email: info@hemiptuniversity.com | Tel: +237 675 283 496"
  );
  expect(links.length).toBe(3);
});

// =====================================================================
// Summary
// =====================================================================
const total = pass + fail;
console.log(`\n${"─".repeat(55)}`);
console.log(`  ${total} tests — ${pass} passed, ${fail} failed`);
console.log("─".repeat(55));

if (fail > 0) process.exit(1);
