"use strict";

/* =====================================================
   HEMIPT ASSISTANT
   Complete bilingual chatbot: English and French
   ===================================================== */


/* =====================================================
   1. SCHOOL INFORMATION AND CHATBOT ANSWERS
   ===================================================== */

const knowledge = {
  en: {
    welcome: `Welcome to HEMIPT Assistant! 🎓

Welcome to HEMS Higher Institute of Professionalism and Technology (HEMIPT).

I can help you discover our departments and programmes, understand registration, check school fees, find campus locations, learn about scholarships and contact the school.

What would you like to know?`,

    fallback: `Thank you for contacting HEMIPT Assistant.

I could not find a specific answer to your question.

You can ask me about:
• Departments and programmes
• HND and degree programmes
• Registration
• School fees and payment at JACCUL
• Campus locations
• Scholarships
• Library and facilities
• School contacts

For information not listed here, please contact the school administration.`,

    welcomeTitle: "Welcome to HEMIPT Assistant",
    welcomeText: "Your guide to programmes, registration, school fees and campus information.",
    eyebrow: "YOUR STUDENT GUIDE",
    chatTitle: "HEMIPT Assistant",
    ready: "Ready to help",
    placeholder: "Type your question...",
    send: "Send ➤",
    tryAsking: "Try asking:",
    notice: "For registration and payment, visit the school office for the necessary instructions.",
    footer: "HEMIPT Student Information Assistant",

    topics: [
      {
        icon: "🎓",
        label: "Departments & Programmes",
        question: "What programmes does HEMIPT offer?"
      },
      {
        icon: "📝",
        label: "Registration",
        question: "How do I register at HEMIPT?"
      },
      {
        icon: "💳",
        label: "School Fees",
        question: "What are the school fees?"
      },
      {
        icon: "📍",
        label: "Campus Locations",
        question: "Where are the HEMIPT campuses?"
      }
    ],

    quick: [
      "What programmes does HEMIPT offer?",
      "How do I register?",
      "What are the school fees?",
      "Where is the school located?",
      "Where do I pay my fees?",
      "What scholarships are available?"
    ],

    about: `ABOUT HEMIPT

Full name:
HEMS Higher Institute of Professionalism and Technology.

The institution is also presented as HEMS University Institute and HEMIPT Polytechnic.

The school advertises its affiliation with the University of Bamenda.

The locations listed in the school information are:
• Bafoussam
• Fundong
• Magba
• Kumbo

The school advertises HND, degree, master's, doctoral and vocational training programmes.

Motto:
INSPIRE • LEARN • ACHIEVE

Another slogan displayed on the school materials is:
EXCELLENCE IS OUR GOAL.`,

    departments: `HEMIPT DEPARTMENTS AND SPECIALITIES

HEMIPT advertises the following five main departments:

1. MEDICAL AND BIOMEDICAL SCIENCES

• Nursing / Nursing Assistance
• Laboratory Technicians Sciences
• Pharmacy Technology
• Midwifery
• Nutrition and Dietetics

2. EDUCATION AND COMMUNICATION

• Didactics, Curriculum Development and Teaching
• Educational Management
• Special Education
• Journalism
• Teacher's Grade 1 Training Programme

3. HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT

• Bakery and Food Processing
• Fashion, Clothing and Textiles
• Tourism and Travel Agency Management
• Hotel Management and Catering
• Communication

4. MANAGEMENT AND BUSINESS STUDIES

• Management Assistant
• Logistics and Transport Management
• Human Resource Management
• Project Management
• Accountancy
• Marketing and Trade / Banking and Finance

5. ENGINEERING AND TECHNOLOGY

• Civil Engineering and Technology
• Electrical and Electronic Engineering and Technology
• Computer Engineering and Technology
• Software Engineering
• Electrical Power System
• Graphic and Web Designing
• Petroleum and Drilling Engineering

ADDITIONAL DEPARTMENT LISTED:

AGRICULTURAL ENGINEERING AND TECHNOLOGY

• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Contact the school office to confirm the programme available at your chosen level and campus.`,

    programs: `HEMIPT PROGRAMMES

HEMIPT offers training in several areas, including:

MEDICAL AND BIOMEDICAL SCIENCES
• Nursing / Nursing Assistance
• Laboratory Technicians Sciences
• Pharmacy Technology
• Midwifery
• Nutrition and Dietetics

EDUCATION AND COMMUNICATION
• Didactics, Curriculum Development and Teaching
• Educational Management
• Special Education
• Journalism
• Teacher's Grade 1 Training Programme

HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT
• Bakery and Food Processing
• Fashion, Clothing and Textiles
• Tourism and Travel Agency Management
• Hotel Management and Catering
• Communication

MANAGEMENT AND BUSINESS STUDIES
• Management Assistant
• Logistics and Transport Management
• Human Resource Management
• Project Management
• Accountancy
• Marketing and Trade / Banking and Finance

ENGINEERING AND TECHNOLOGY
• Civil Engineering and Technology
• Electrical and Electronic Engineering and Technology
• Computer Engineering and Technology
• Software Engineering
• Electrical Power System
• Graphic and Web Designing
• Petroleum and Drilling Engineering

AGRICULTURAL ENGINEERING AND TECHNOLOGY
• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Ask me about HND programmes, bachelor's degrees, master's programmes or doctoral programmes for more information.`,

    health: `MEDICAL AND BIOMEDICAL SCIENCES

The specialities listed are:

1. Nursing / Nursing Assistance
2. Laboratory Technicians Sciences
3. Pharmacy Technology
4. Midwifery
5. Nutrition and Dietetics

Visit the school office to confirm the entry requirements, programme duration and availability.`,

    education: `EDUCATION AND COMMUNICATION

The specialities listed are:

1. Didactics, Curriculum Development and Teaching
2. Educational Management
3. Special Education
4. Journalism
5. Teacher's Grade 1 Training Programme

Contact the school office for admission requirements and programme availability.`,

    management: `MANAGEMENT AND BUSINESS STUDIES

The specialities listed are:

1. Management Assistant
2. Logistics and Transport Management
3. Human Resource Management
4. Project Management
5. Accountancy
6. Marketing and Trade / Banking and Finance

Ask the school office which programmes are available at HND and degree levels.`,

    engineering: `ENGINEERING AND TECHNOLOGY

The specialities listed are:

1. Civil Engineering and Technology
2. Electrical and Electronic Engineering and Technology
3. Computer Engineering and Technology
4. Software Engineering
5. Electrical Power System
6. Graphic and Web Designing
7. Petroleum and Drilling Engineering

The school information also lists Agricultural Engineering and Technology, covering Crop Production, Animal Production, Agricultural Technology and Agro-Pastoral Entrepreneurship.`,

    homeEconomics: `HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT

The specialities listed are:

1. Bakery and Food Processing
2. Fashion, Clothing and Textiles
3. Tourism and Travel Agency Management
4. Hotel Management and Catering
5. Communication

Contact the school office to confirm the programme and campus where it is available.`,

    agriculture: `AGRICULTURAL ENGINEERING AND TECHNOLOGY

The specialities listed are:

• Crop Production
• Animal Production
• Agricultural Technology
• Agro-Pastoral Entrepreneurship

Visit the school office for information about admission and programme availability.`,

    degrees: `BACHELOR'S DEGREE PROGRAMMES

The school information lists the following bachelor's degree programmes:

MEDICAL AND HEALTH-RELATED PROGRAMMES
• Nursing
• Midwifery
• Medical Laboratory Sciences
• Pharmacy Technology

MANAGEMENT AND BUSINESS
• Accountancy
• Banking and Finance
• Management
• Transport and Logistics
• Marketing

OTHER PROGRAMMES
• Public Law
• Telecommunication
• Software Engineering
• Education
• Customs and Transit
• Civil Engineering
• Tourism and Hotel Management

MASTER'S AND DOCTORAL PROGRAMMES

The school information also lists programmes in areas such as:

• Public Health
• Medical Surgical Nursing
• Pediatric Nursing
• Psychiatric Nursing
• Epidemiology
• Infectious Diseases Control
• Health Education Management
• Community Health
• Clinical Pathology
• Clinical Haematology
• Medical Parasitology
• Midwifery Sciences
• Reproductive Health
• Mother and Child Care
• Business Administration
• Banking and Finance
• Accountancy
• Telecommunication
• Public Law
• Civil Engineering

The availability of a specific programme depends on the level and current school offering. Contact HEMIPT for confirmation.`,

    vocational: `VOCATIONAL TRAINING CENTRE

The school information advertises vocational training in:

• Clothing and Tailoring
• Secretariat Duties
• Computer Maintenance
• Hardware and Software
• Home Economics, including Bakery and Cookery
• Hotel Management
• Computerized Accounting

The vocational training centre is described in the school information as being behind Pharmacie Marché B.

Contact the school to confirm current registration procedures and training duration.`,

    registration: `HOW TO REGISTER AT HEMIPT

Registration is done at the school office.

FOLLOW THESE STEPS:

1. Visit the HEMIPT school office in person.
2. Tell the staff the programme and level you want to study.
3. Ask for the current admission requirements and required documents.
4. Complete the registration procedure with the school staff.
5. Ask the office to confirm the registration fee and any other requirements.
6. Keep the documents and receipts provided to you.

The school information also states that students can register through the school website:
https://hemiptuniversity.com

However, according to the registration procedure you provided, students go to the school office to complete registration.

For assistance, contact the school using the telephone numbers or email addresses provided in this assistant.`,

    registrationFees: `REGISTRATION FEES

The registration fees displayed in the school information are:

• HND programmes: 25,000 FCFA.
• Degree / Master's programmes: 35,000 FCFA.

Visit the school office to confirm your programme's registration fee and the payment instructions before making payment.`,

    fees: `HEMIPT SCHOOL FEES

The annual tuition fees and instalments are listed below.

SCHOOL OF HEALTH
• First instalment: 200,000 FCFA
• Second instalment: 100,000 FCFA
• Total tuition per year: 300,000 FCFA

SCHOOL OF BUSINESS
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

EDUCATION AND COMMUNICATION
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

ENGINEERING, TECHNOLOGY, LOGISTICS AND TRANSPORT
• First instalment: 200,000 FCFA
• Second instalment: 100,000 FCFA
• Total tuition per year: 300,000 FCFA

HOME ECONOMICS, TOURISM AND HOTEL MANAGEMENT
• First instalment: 170,000 FCFA
• Second instalment: 80,000 FCFA
• Total tuition per year: 250,000 FCFA

BACHELOR'S DEGREE PROGRAMMES
• School of Health: 390,000 FCFA
• School of Business: 350,000 FCFA
• Education and Communication: 350,000 FCFA
• Engineering and Technology: 390,000 FCFA
• Home Economics, Tourism and Hotel Management: 350,000 FCFA

REGISTRATION FEES
• HND programmes: 25,000 FCFA
• Degree / Master's programmes: 35,000 FCFA

The school also advertises scholarships and financial assistance.

Visit the school office to confirm the current amount applicable to your programme before paying.`,

    payment: `WHERE TO PAY SCHOOL FEES

School fees are paid at JACCUL, the commercial bank located in the same building as the school.

PAYMENT PROCEDURE:

1. Visit the school office and confirm the amount you must pay.
2. Ask the school staff for the correct payment instructions.
3. Go to JACCUL, the commercial bank in the same building.
4. Make your payment according to the instructions provided.
5. Keep your bank payment receipt.
6. Follow the school's instructions for confirming your payment.

Always confirm the amount and payment details with the school before making a payment.`,

    campuses: `HEMIPT CAMPUS LOCATIONS

The school locations are:

1. BAFOUSSAM — CAMPUS A

After SPC, at the mixed control point, behind New SIKA ENERGIE petrol station.

2. BAFOUSSAM — CAMPUS B

After Total en Base, opposite the MTN office in Djemoun, near the Yellow Storey.

3. MAGBA

Opposite the Gendarmerie in Magba.

Telephone: +237 680 78 59 56

4. FUNDONG

Chiafunkuin's Foundation, opposite Fundong Credit Union.

Telephone: +237 676 24 48 48

5. KUMBO

Kumbo is listed among the school's locations. Contact the school to confirm the precise address and available programmes there.

Contact the school before travelling if you need directions or confirmation of your programme's campus.`,

    contacts: `HEMIPT GENERAL CONTACTS

TELEPHONE NUMBERS

• +237 675 283 496
• +237 672 317 975
• +237 671 89 12 89
• +237 676 66 09 61
• +237 678 981 122
• +237 675 221 182
• +237 675 104 940
• +237 651 42 72 04
• +237 691 933 667
• +237 651 708 999

CAMPUS CONTACTS

Magba:
+237 680 78 59 56

Fundong:
+237 676 24 48 48

EMAIL ADDRESSES

hemiptpolytechnic@gmail.com

info@hemiptuniversity.com

WEBSITE

https://hemiptuniversity.com

FACEBOOK

HEMIPT University Institute

You can contact the school for registration, fees, admission requirements and programme information.`,

    scholarship: `SCHOLARSHIPS AND FINANCIAL ASSISTANCE

HEMIPT advertises the following scholarship and financial assistance opportunities:

• Scholarships of up to 50%.
• Scholarship assistance advertised up to 250,000 FCFA.
• Other financial assistance offers.

The school also advertises qualified teachers, good workshops and equipment, a biomedical practising centre, practising farms and incubators, a rich library, free Wi-Fi and a friendly learning environment.

Visit the school office to ask about current scholarship conditions, eligibility requirements, available amounts and application procedures.`,

    facilities: `HEMIPT FACILITIES AND ADVANTAGES

The school advertises the following facilities and advantages:

• Free Wi-Fi
• Qualified teachers
• Good workshops and equipment
• Biomedical practising centre
• Practising farms and incubators
• Rich library
• Friendly and collaborative environment
• God-driven institution

The school information also mentions opportunities for internships with partner universities in Canada, the USA, the UK and Australia, as well as NGOs and government organisations.

Ask the school for information about the facilities and opportunities available for your programme and campus.`,

    library: `HEMIPT LIBRARY

The school advertises a rich library as one of its advantages.

For the exact library location, opening hours, access requirements and available resources, ask the administration at your campus.`,

    classes: `NATURE OF CLASSES

The school information lists the following class formats:

• Physical classes
• Online classes
• Sandwich classes
• Programmed classes

Ask the school which format is available for your programme and level.`,

    duration: `TRAINING DURATION

The school information states that training can last:

• 12 months
• 2 years
• 3 years

At the end of training and examinations, the school information mentions certification for VND (Vocational National Diploma), HND (Higher National Diploma), degrees or master's qualifications, depending on the programme.

Ask the school office to confirm the exact duration and qualification for your chosen programme.`,

    contact: `You can contact HEMIPT through these channels:

Telephone:
+237 675 283 496
+237 672 317 975
+237 671 89 12 89
+237 676 66 09 61

Email:
hemiptpolytechnic@gmail.com
info@hemiptuniversity.com

Website:
https://hemiptuniversity.com

You can also visit the school office in person.`,

    website: `HEMIPT WEBSITE

Website:
https://hemiptuniversity.com

The school information states that students can register through the school website.

You can also visit the school office for assistance with registration and admission.`,

    greeting: `Hello and welcome to HEMIPT Assistant! 🎓

I can help you with programmes, registration, school fees, JACCUL payments, campuses, scholarships and school contacts.

What would you like to know?`,

    thanks: `You're welcome! 😊

Thank you for using HEMIPT Assistant.

If you need more information, ask me another question or contact the school office.`
  },


  /* ===================================================
     FRENCH ANSWERS
     =================================================== */

  fr: {
    welcome: `Bienvenue sur l'Assistant HEMIPT ! 🎓

Bienvenue à HEMS Higher Institute of Professionalism and Technology (HEMIPT).

Je peux vous aider à découvrir les départements et les filières, comprendre l'inscription, consulter les frais de scolarité, trouver les campus et obtenir les coordonnées de l'école.

Que souhaitez-vous savoir ?`,

    fallback: `Merci d'avoir contacté l'Assistant HEMIPT.

Je n'ai pas trouvé de réponse précise à votre question.

Vous pouvez poser des questions sur :
• Les départements et les filières
• Les programmes HND et les licences
• L'inscription
• Les frais de scolarité et le paiement à JACCUL
• Les campus
• Les bourses
• La bibliothèque et les installations
• Les contacts de l'école

Pour toute autre information, veuillez contacter l'administration de l'école.`,

    welcomeTitle: "Bienvenue sur l'Assistant HEMIPT",
    welcomeText: "Votre guide pour les filières, l'inscription, les frais de scolarité et les campus.",
    eyebrow: "VOTRE GUIDE ÉTUDIANT",
    chatTitle: "Assistant HEMIPT",
    ready: "Prêt à vous aider",
    placeholder: "Écrivez votre question...",
    send: "Envoyer ➤",
    tryAsking: "Essayez de demander :",
    notice: "Pour l'inscription et le paiement, rendez-vous au bureau de l'école pour obtenir les instructions nécessaires.",
    footer: "Assistant d'information des étudiants HEMIPT",

    topics: [
      {
        icon: "🎓",
        label: "Départements et filières",
        question: "Quelles filières propose HEMIPT ?"
      },
      {
        icon: "📝",
        label: "Inscription",
        question: "Comment faire mon inscription à HEMIPT ?"
      },
      {
        icon: "💳",
        label: "Frais de scolarité",
        question: "Quels sont les frais de scolarité ?"
      },
      {
        icon: "📍",
        label: "Localisation des campus",
        question: "Où se trouvent les campus de HEMIPT ?"
      }
    ],

    quick: [
      "Quelles filières propose HEMIPT ?",
      "Comment faire mon inscription ?",
      "Quels sont les frais de scolarité ?",
      "Où se trouve l'école ?",
      "Où payer les frais de scolarité ?",
      "Quelles bourses sont disponibles ?"
    ],

    about: `À PROPOS DE HEMIPT

Nom complet :
HEMS Higher Institute of Professionalism and Technology.

L'établissement est également présenté sous les noms HEMS University Institute et HEMIPT Polytechnic.

L'école annonce son affiliation à l'Université de Bamenda.

Les localités  sont :
• Bafoussam
• Fundong
• Magba
• Kumbo

L'école annonce des programmes HND, de licence, de master, de doctorat et de formation professionnelle.

Devise :
INSPIRE • LEARN • ACHIEVE

Un autre slogan affiché est :
EXCELLENCE IS OUR GOAL.`,

    departments: `DÉPARTEMENTS ET SPÉCIALITÉS DE HEMIPT

HEMIPT présente cinq grands départements :

1. SCIENCES MÉDICALES ET BIOMÉDICALES

• Soins infirmiers / Aide-soignant
• Sciences des techniciens de laboratoire
• Technologie pharmaceutique
• Sage-femme / Maïeutique
• Nutrition et diététique

2. ÉDUCATION ET COMMUNICATION

• Didactique, élaboration des programmes et enseignement
• Gestion de l'éducation
• Éducation spécialisée
• Journalisme
• Programme de formation des enseignants de Grade 1

3. ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE

• Boulangerie et transformation alimentaire
• Mode, habillement et textile
• Gestion du tourisme et des agences de voyage
• Gestion hôtelière et restauration
• Communication

4. GESTION ET ÉTUDES COMMERCIALES

• Assistant de gestion
• Logistique et transport
• Gestion des ressources humaines
• Gestion de projet
• Comptabilité
• Marketing et commerce / Banque et finance

5. INGÉNIERIE ET TECHNOLOGIE

• Génie civil et technologie
• Génie électrique et électronique
• Génie informatique
• Génie logiciel
• Systèmes électriques de puissance
• Conception graphique et web
• Pétrole et forage

AUTRE DÉPARTEMENT MENTIONNÉ :

GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE

• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Contactez le bureau de l'école pour confirmer les filières disponibles selon le niveau et le campus.`,

    programs: `PROGRAMMES DE HEMIPT

HEMIPT présente plusieurs domaines de formation :

SCIENCES MÉDICALES ET BIOMÉDICALES
• Soins infirmiers / Aide-soignant
• Sciences des techniciens de laboratoire
• Technologie pharmaceutique
• Sage-femme
• Nutrition et diététique

ÉDUCATION ET COMMUNICATION
• Didactique, élaboration des programmes et enseignement
• Gestion de l'éducation
• Éducation spécialisée
• Journalisme
• Formation des enseignants de Grade 1

ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE
• Boulangerie et transformation alimentaire
• Mode, habillement et textile
• Gestion du tourisme et des agences de voyage
• Gestion hôtelière et restauration
• Communication

GESTION ET ÉTUDES COMMERCIALES
• Assistant de gestion
• Logistique et transport
• Gestion des ressources humaines
• Gestion de projet
• Comptabilité
• Marketing et commerce / Banque et finance

INGÉNIERIE ET TECHNOLOGIE
• Génie civil et technologie
• Génie électrique et électronique
• Génie informatique
• Génie logiciel
• Systèmes électriques de puissance
• Conception graphique et web
• Pétrole et forage

GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE
• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Vous pouvez également demander des informations sur les programmes HND, les licences, les masters et les doctorats.`,

    health: `SCIENCES MÉDICALES ET BIOMÉDICALES

Les spécialités indiquées sont :

1. Soins infirmiers / Aide-soignant
2. Sciences des techniciens de laboratoire
3. Technologie pharmaceutique
4. Sage-femme / Maïeutique
5. Nutrition et diététique

Rendez-vous au bureau de l'école pour confirmer les conditions d'admission, la durée et la disponibilité des programmes.`,

    education: `ÉDUCATION ET COMMUNICATION

Les spécialités indiquées sont :

1. Didactique, élaboration des programmes et enseignement
2. Gestion de l'éducation
3. Éducation spécialisée
4. Journalisme
5. Programme de formation des enseignants de Grade 1

Contactez le bureau de l'école pour les conditions d'admission et la disponibilité des programmes.`,

    management: `GESTION ET ÉTUDES COMMERCIALES

Les spécialités indiquées sont :

1. Assistant de gestion
2. Logistique et transport
3. Gestion des ressources humaines
4. Gestion de projet
5. Comptabilité
6. Marketing et commerce / Banque et finance

Demandez au bureau de l'école quels programmes sont disponibles aux niveaux HND et licence.`,

    engineering: `INGÉNIERIE ET TECHNOLOGIE

Les spécialités indiquées sont :

1. Génie civil et technologie
2. Génie électrique et électronique
3. Génie informatique
4. Génie logiciel
5. Systèmes électriques de puissance
6. Conception graphique et web
7. Pétrole et forage

Les informations de l'école mentionnent également le génie agricole et la technologie agricole : production végétale, production animale, technologie agricole et entrepreneuriat agropastoral.`,

    homeEconomics: `ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE

Les spécialités indiquées sont :

1. Boulangerie et transformation alimentaire
2. Mode, habillement et textile
3. Gestion du tourisme et des agences de voyage
4. Gestion hôtelière et restauration
5. Communication

Contactez le bureau de l'école pour confirmer le programme et le campus où il est disponible.`,

    agriculture: `GÉNIE AGRICOLE ET TECHNOLOGIE AGRICOLE

Les spécialités indiquées sont :

• Production végétale
• Production animale
• Technologie agricole
• Entrepreneuriat agropastoral

Rendez-vous au bureau de l'école pour obtenir des informations sur l'admission et la disponibilité des programmes.`,

    degrees: `PROGRAMMES DE LICENCE

Les informations de l'école mentionnent les programmes suivants :

SANTÉ ET DOMAINES MÉDICAUX
• Soins infirmiers
• Sage-femme
• Sciences de laboratoire médical
• Technologie pharmaceutique

GESTION ET COMMERCE
• Comptabilité
• Banque et finance
• Management
• Transport et logistique
• Marketing

AUTRES PROGRAMMES
• Droit public
• Télécommunications
• Génie logiciel
• Éducation
• Douanes et transit
• Génie civil
• Tourisme et hôtellerie

PROGRAMMES DE MASTER ET DE DOCTORAT

Les domaines mentionnés comprennent :

• Santé publique
• Soins infirmiers médico-chirurgicaux
• Soins infirmiers pédiatriques
• Soins infirmiers psychiatriques
• Épidémiologie
• Contrôle des maladies infectieuses
• Gestion de l'éducation sanitaire
• Santé communautaire
• Pathologie clinique
• Hématologie clinique
• Parasitologie médicale
• Sciences de la maïeutique
• Santé reproductive
• Santé de la mère et de l'enfant
• Administration des affaires
• Banque et finance
• Comptabilité
• Télécommunications
• Droit public
• Génie civil

La disponibilité dépend du niveau et des programmes actuellement proposés. Contactez HEMIPT pour confirmation.`,

    vocational: `CENTRE DE FORMATION PROFESSIONNELLE

Les formations annoncées comprennent :

• Habillement et couture
• Secrétariat
• Maintenance informatique
• Matériel et logiciels informatiques
• Économie familiale, notamment boulangerie et cuisine
• Gestion hôtelière
• Comptabilité informatisée

Le centre de formation professionnelle est indiqué comme étant derrière la Pharmacie Marché B.

Contactez l'école pour confirmer les inscriptions et la durée des formations.`,

    registration: `COMMENT S'INSCRIRE À HEMIPT

L'inscription se fait au bureau de l'école.

SUIVEZ CES ÉTAPES :

1. Rendez-vous personnellement au bureau de HEMIPT.
2. Indiquez la filière et le niveau que vous souhaitez suivre.
3. Demandez les conditions d'admission et les documents nécessaires.
4. Effectuez les formalités d'inscription avec le personnel de l'école.
5. Faites confirmer les frais d'inscription et les autres exigences.
6. Conservez les documents et les reçus qui vous sont remis.

Les informations de l'école indiquent également que les étudiants peuvent s'inscrire sur le site :
https://hemiptuniversity.com

Cependant, selon la procédure que vous m'avez indiquée, les étudiants se rendent au bureau de l'école pour finaliser leur inscription.

Vous pouvez contacter l'administration par téléphone ou par e-mail pour obtenir de l'aide.`,

    registrationFees: `FRAIS D'INSCRIPTION

Les frais d'inscription indiqués sont :

• Programmes HND : 25 000 FCFA.
• Programmes de licence / master : 35 000 FCFA.

Rendez-vous au bureau de l'école pour confirmer les frais applicables à votre programme et les instructions de paiement avant de payer.`,

    fees: `FRAIS DE SCOLARITÉ DE HEMIPT

Les frais annuels et les tranches sont indiqués ci-dessous.

ÉCOLE DE SANTÉ
• Première tranche : 200 000 FCFA
• Deuxième tranche : 100 000 FCFA
• Total annuel : 300 000 FCFA

ÉCOLE DE COMMERCE
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

ÉDUCATION ET COMMUNICATION
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

INGÉNIERIE, TECHNOLOGIE, LOGISTIQUE ET TRANSPORT
• Première tranche : 200 000 FCFA
• Deuxième tranche : 100 000 FCFA
• Total annuel : 300 000 FCFA

ÉCONOMIE FAMILIALE, TOURISME ET HÔTELLERIE
• Première tranche : 170 000 FCFA
• Deuxième tranche : 80 000 FCFA
• Total annuel : 250 000 FCFA

PROGRAMMES DE LICENCE
• École de santé : 390 000 FCFA
• École de commerce : 350 000 FCFA
• Éducation et communication : 350 000 FCFA
• Ingénierie et technologie : 390 000 FCFA
• Économie familiale, tourisme et hôtellerie : 350 000 FCFA

FRAIS D'INSCRIPTION
• Programmes HND : 25 000 FCFA
• Programmes de licence / master : 35 000 FCFA

L'école annonce également des bourses et des aides financières.

Rendez-vous au bureau de l'école pour confirmer le montant applicable à votre programme avant tout paiement.`,

    payment: `OÙ PAYER LES FRAIS DE SCOLARITÉ

Les frais de scolarité sont payés à JACCUL, la banque commerciale située dans le même bâtiment que l'école.

PROCÉDURE DE PAIEMENT :

1. Rendez-vous au bureau de l'école pour confirmer le montant à payer.
2. Demandez les instructions exactes de paiement.
3. Rendez-vous à JACCUL, la banque commerciale située dans le même bâtiment.
4. Effectuez le paiement selon les instructions reçues.
5. Conservez votre reçu bancaire.
6. Suivez les instructions de l'école pour confirmer votre paiement.

Confirmez toujours le montant et les informations de paiement auprès de l'école avant de payer.`,

    campuses: `LOCALISATION DES CAMPUS DE HEMIPT

Les localités de l'ecole  sont :

1. BAFOUSSAM — CAMPUS A

Après SPC, au point de contrôle mixte, derrière la station-service New SIKA ENERGIE.

2. BAFOUSSAM — CAMPUS B

Après Total en Base, en face du bureau MTN à Djemoun, près du Yellow Storey.

3. MAGBA

En face de la gendarmerie de Magba.

Téléphone :
+237 680 78 59 56

4. FUNDONG

Fondation Chiafunkuin, en face de la Fundong Credit Union.

Téléphone :
+237 676 24 48 48

5. KUMBO

Kumbo figure parmi les localités de l'école. Contactez l'administration pour confirmer l'adresse exacte et les programmes disponibles.

Contactez l'école avant de vous déplacer si vous avez besoin d'itinéraires ou de confirmer votre campus.`,

    contacts: `COORDONNÉES GÉNÉRALES DE HEMIPT

NUMÉROS DE TÉLÉPHONE

• +237 675 283 496
• +237 672 317 975
• +237 671 89 12 89
• +237 676 66 09 61
• +237 678 981 122
• +237 675 221 182
• +237 675 104 940
• +237 651 42 72 04
• +237 691 933 667
• +237 651 708 999

CONTACTS DES CAMPUS

Magba :
+237 680 78 59 56

Fundong :
+237 676 24 48 48

ADRESSES E-MAIL

hemiptpolytechnic@gmail.com

info@hemiptuniversity.com

SITE WEB

https://hemiptuniversity.com

FACEBOOK

HEMIPT University Institute

Vous pouvez contacter l'école pour les inscriptions, les frais, les conditions d'admission et les programmes.`,

    scholarship: `BOURSES ET AIDES FINANCIÈRES

HEMIPT annonce les possibilités suivantes :

• Des bourses pouvant atteindre 50 %.
• Des bourses annoncées jusqu'à 250 000 FCFA.
• D'autres offres d'aide financière.

L'école annonce également des enseignants qualifiés, de bons ateliers et équipements, un centre de pratique biomédicale, des fermes pratiques et des incubateurs, une riche bibliothèque, le Wi-Fi gratuit et un environnement d'apprentissage convivial.

Rendez-vous au bureau de l'école pour connaître les conditions actuelles, les critères d'éligibilité, les montants et les procédures de demande.`,

    facilities: `INSTALLATIONS ET AVANTAGES DE HEMIPT

L'école annonce les avantages suivants :

• Wi-Fi gratuit
• Enseignants qualifiés
• Bons ateliers et équipements
• Centre de pratique biomédicale
• Fermes pratiques et incubateurs
• Riche bibliothèque
• Environnement convivial et collaboratif
• Institution guidée par Dieu

Les informations de l'école mentionnent aussi des possibilités de stage avec des universités partenaires au Canada, aux États-Unis, au Royaume-Uni et en Australie, ainsi qu'avec des ONG et des organisations gouvernementales.

Demandez à l'école quelles installations et possibilités sont disponibles pour votre programme et votre campus.`,

    library: `BIBLIOTHÈQUE DE HEMIPT

L'école annonce une riche bibliothèque parmi ses avantages.

Pour connaître l'emplacement exact, les heures d'ouverture, les conditions d'accès et les ressources disponibles, adressez-vous à l'administration de votre campus.`,

    classes: `TYPES DE COURS

Les formats de cours indiqués sont :

• Cours en présentiel
• Cours en ligne
• Formation en sandwich
• Cours programmés

Demandez à l'école quel format est disponible pour votre filière et votre niveau.`,

    duration: `DURÉE DES FORMATIONS

Les informations de l'école indiquent des durées de formation de :

• 12 mois
• 2 ans
• 3 ans

À la fin de la formation et des examens, les qualifications mentionnées comprennent le VND (Vocational National Diploma), le HND (Higher National Diploma), la licence ou le master, selon le programme.

Demandez au bureau de l'école de confirmer la durée et la qualification correspondant à votre programme.`,

    contact: `Vous pouvez contacter HEMIPT par les moyens suivants :

Téléphone :
+237 675 283 496
+237 672 317 975
+237 671 89 12 89
+237 676 66 09 61

E-mail :
hemiptpolytechnic@gmail.com
info@hemiptuniversity.com

Site web :
https://hemiptuniversity.com

Vous pouvez également vous rendre directement au bureau de l'école.`,

    website: `SITE WEB DE HEMIPT

Site web :
https://hemiptuniversity.com

Les informations de l'école indiquent que les étudiants peuvent s'inscrire sur le site web.

Vous pouvez aussi vous rendre au bureau de l'école pour obtenir de l'aide concernant l'inscription et l'admission.`,

    greeting: `Bonjour et bienvenue sur l'Assistant HEMIPT ! 🎓

Je peux vous renseigner sur les filières, l'inscription, les frais de scolarité, les paiements à JACCUL, les campus, les bourses et les contacts.

Que souhaitez-vous savoir ?`,

    thanks: `Je vous en prie ! 😊

Merci d'avoir utilisé l'Assistant HEMIPT.

Si vous avez besoin d'autres informations, posez-moi une autre question ou contactez le bureau de l'école.`
  }
};


/* =====================================================
   2. MATCH QUESTIONS TO THE CORRECT ANSWER
   ===================================================== */

const intents = [
  {
    id: "registrationFees",
    keys: [
      "registration fee", "registration fees", "registration cost",
      "frais inscription", "frais d inscription",
      "frais inscription hnd", "frais d admission",
      "how much to register", "cost of registration", "registration payment",
      "combien pour s inscrire", "cout d inscription"
    ]
  },

  {
    id: "payment",
    keys: [
      "jacc ul", "jaccul", "where do i pay", "where to pay",
      "where can i pay", "where is the bank", "which bank",
      "payment location", "pay my fees", "pay school fees",
      "how to pay", "bank payment", "payment procedure",
      "where do i make payment", "where should i pay", "payment method",
      "ou payer", "ou se trouve la banque", "quelle banque",
      "paiement", "payer les frais", "payer la scolarite",
      "comment payer", "banque", "mode de paiement", "effectuer un paiement"
    ]
  },

  {
    id: "registration",
    keys: [
      "how do i register", "how to register", "how can i register",
      "registration", "register", "enrol", "enroll", "enrolment", "enrollment",
      "how to apply", "how do i apply", "apply to hemipt", "application",
      "admission requirements", "required documents", "what documents",
      "documents required", "how to get in", "admission process",
      "new student", "i want to register", "i want to enroll",
      "sign up", "how to sign up", "how do i sign up",
      "comment m inscrire", "comment faire mon inscription",
      "comment s inscrire", "inscription", "inscrire",
      "documents necessaires", "conditions d admission",
      "comment postuler", "dossier d inscription",
      "pieces a fournir", "nouveau etudiant"
    ]
  },

  {
    id: "fees",
    keys: [
      "school fees", "tuition fees", "tuition",
      "how much are the fees", "how much is school",
      "how much do i pay", "how much does it cost", "how much to study",
      "how much is the programme", "how much is the program",
      "cost of studying", "study fees", "academic fees",
      "fee structure", "first instalment", "second instalment",
      "total tuition", "degree fees", "annual fees", "yearly fees",
      "fee for hnd", "hnd fees", "cost", "price", "how much",
      "frais de scolarite", "frais scolaires", "combien coute",
      "combien coutent", "combien dois je payer", "combien pour etudier",
      "barreme", "premiere tranche", "deuxieme tranche",
      "montant de la scolarite", "prix de la formation",
      "tarif", "cout des etudes"
    ]
  },

  {
    id: "degrees",
    keys: [
      "bachelor degree", "bachelor's degree", "bachelors", "bsc",
      "degree programmes", "degree programs", "higher degree",
      "master programme", "master's degree", "masters", "postgraduate",
      "doctoral programme", "doctoral program", "phd", "doctorate",
      "licence", "licence professionnelle", "master",
      "doctorat", "programmes de licence", "programmes de master",
      "programme doctoral", "diplome universitaire", "baccalaureat", "maitrise"
    ]
  },

  {
    id: "vocational",
    keys: [
      "vocational", "vocational training", "tailoring",
      "secretariat", "computer maintenance", "cookery",
      "computerized accounting", "short course", "skills training",
      "trade skills", "certificate course", "practical training",
      "craft", "artisan",
      "formation professionnelle", "couture", "maintenance informatique",
      "formation en informatique", "comptabilite informatisee",
      "formation courte", "formation aux metiers", "formation pratique"
    ]
  },

  {
    id: "health",
    keys: [
      "medical and biomedical", "nursing", "nursing assistance",
      "nurse", "nursing programme", "nursing program",
      "laboratory technician", "laboratory sciences", "medical lab",
      "pharmacy technology", "pharmacy", "pharmacist",
      "midwifery", "midwife", "nutrition and dietetics",
      "medicine", "medical", "health science", "biomedical",
      "sciences medicales", "sciences biomedicales",
      "soins infirmiers", "infirmier", "infirmiere",
      "sage femme", "maieutique", "pharmacie",
      "nutrition et dietetique", "technologie pharmaceutique",
      "laboratoire medical", "sciences de la sante"
    ]
  },

  {
    id: "education",
    keys: [
      "education and communication", "special education",
      "educational management", "journalism", "didactics",
      "teacher grade 1", "education communication",
      "teacher training", "teaching", "pedagogy",
      "teaching certificate", "become a teacher",
      "education et communication", "education specialisee",
      "gestion de l education", "journalisme", "didactique",
      "enseignement", "formation des enseignants", "pedagogie",
      "devenir enseignant"
    ]
  },

  {
    id: "management",
    keys: [
      "management and business", "management assistant",
      "human resource management", "project management",
      "accountancy", "accounting", "banking and finance",
      "logistics and transport", "business administration",
      "hr", "human resources", "marketing", "supply chain",
      "finance", "business",
      "gestion etudes commerciales", "assistant de gestion",
      "ressources humaines", "gestion de projet",
      "comptabilite", "banque et finance", "logistique et transport",
      "finance de marche", "administration des affaires"
    ]
  },

  {
    id: "homeEconomics",
    keys: [
      "home economics", "tourism and hotel management",
      "bakery and food processing", "fashion and textiles",
      "tourism and travel agency", "hotel management",
      "catering", "hospitality", "cooking", "chef",
      "fashion design", "hotel school", "textile", "food processing",
      "economie familiale", "tourisme", "hotellerie",
      "boulangerie", "transformation alimentaire",
      "mode et textile", "agence de voyage", "restauration",
      "cuisine", "couture", "gestion hoteliere"
    ]
  },

  {
    id: "agriculture",
    keys: [
      "agricultural engineering", "crop production",
      "animal production", "agricultural technology",
      "agro pastoral", "agriculture", "farming", "farm",
      "crops", "livestock", "agronomy", "agricultural science",
      "agric",
      "genie agricole", "production vegetale", "production animale",
      "technologie agricole", "agropastoral",
      "agriculture", "elevage", "culture maraichere", "ferme"
    ]
  },

  {
    id: "engineering",
    keys: [
      "engineering and technology", "software engineering",
      "computer engineering", "civil engineering",
      "electrical engineering", "electronic engineering",
      "graphic and web designing", "petroleum and drilling",
      "computer science", "it", "software", "web development",
      "web design", "tech", "coding", "programming",
      "computer", "electrical", "electronics",
      "genie logiciel", "genie informatique", "genie civil",
      "genie electrique", "genie electronique",
      "conception graphique", "developpement web",
      "petrole et forage", "ingenierie et technologie",
      "informatique", "programmation", "developpement logiciel"
    ]
  },

  {
    id: "departments",
    keys: [
      "list all departments", "what are the departments",
      "which departments", "all specialities", "all specialties",
      "departments and specialities", "departments and programs",
      "departments and programmes", "complete list", "overview of programmes",
      "everything you offer", "show me all",
      "what programmes does hemipt offer",
      "what programs does hemipt offer",
      "what courses does hemipt offer", "list of departments",
      "quels sont les departements", "liste des departements",
      "departements et specialites", "toutes les filieres",
      "quelles filieres propose hemipt", "quels programmes propose hemipt",
      "liste complete", "tout ce que vous proposez"
    ]
  },

  {
    id: "programs",
    keys: [
      "programmes", "programs", "available courses", "courses offered",
      "specialities", "specialties", "what can i study",
      "what can i study here", "what do you offer", "study options",
      "courses", "subjects", "offered programmes", "available programmes",
      "filiere", "filieres", "formations",
      "quelles formations", "offre de formation",
      "que puis je etudier", "cours disponibles", "formations disponibles"
    ]
  },

  {
    id: "campuses",
    keys: [
      "campus", "campuses", "school location", "school address",
      "where is the school", "where is hemipt", "where exactly is hemipt",
      "where are the campuses", "directions to the school",
      "address", "directions", "how to find the school",
      "which city", "which town", "near me",
      "bafoussam", "fundong", "magba", "kumbo", "djemoun",
      "ou se trouve l ecole", "ou se trouve hemipt",
      "localisation", "adresse de l ecole", "campus de",
      "adresse exacte", "comment y aller", "quelle ville"
    ]
  },

  {
    id: "contacts",
    keys: [
      "contact details", "contact information", "phone number",
      "telephone number", "email address", "school email",
      "school telephone", "school phone", "call the school",
      "how can i contact", "contact details hemipt",
      "phone", "call", "reach out", "get in touch",
      "hotline", "contact number", "school number",
      "numero de telephone", "coordonnees", "adresse email",
      "contacter l ecole", "telephone de l ecole",
      "appeler", "joindre", "numero de contact"
    ]
  },

  {
    id: "scholarship",
    keys: [
      "scholarship", "scholarships", "financial aid",
      "financial assistance", "scholarship application",
      "how to get a scholarship", "50 percent scholarship",
      "bursary", "financial help", "help with fees",
      "fee reduction", "grant", "funding", "financial support",
      "can i get help with fees", "discount on fees",
      "bourse", "bourses", "aide financiere",
      "demande de bourse", "comment obtenir une bourse",
      "subvention", "aide aux frais", "reduction de frais",
      "soutien financier"
    ]
  },

  {
    id: "library",
    keys: [
      "library", "school library", "where is the library",
      "books", "study room", "reading room", "library access",
      "bibliotheque", "ou est la bibliotheque",
      "livres", "salle de lecture", "acces a la bibliotheque"
    ]
  },

  {
    id: "facilities",
    keys: [
      "facilities", "school facilities", "school advantages",
      "free wifi", "wi fi", "workshops", "equipment",
      "biomedical centre", "practising centre",
      "amenities", "infrastructure", "school resources",
      "what does the school have", "labs",
      "installations", "avantages", "equipements",
      "wifi gratuit", "centre de pratique biomedicale",
      "ressources", "laboratoires"
    ]
  },

  {
    id: "classes",
    keys: [
      "online classes", "physical classes", "sandwich classes",
      "class formats", "nature of classes", "mode of study",
      "timetable", "schedule", "how are classes held",
      "distance learning", "blended learning", "study mode",
      "cours en ligne", "cours en presentiel",
      "types de cours", "format des cours", "formation en sandwich",
      "emploi du temps", "mode de cours", "apprentissage en ligne"
    ]
  },

  {
    id: "duration",
    keys: [
      "duration", "how long is the training", "how long",
      "how many years", "how long does it take",
      "12 months", "training duration", "years to study",
      "length of course", "programme length", "how many semesters",
      "duree de formation", "combien d annees",
      "duree des etudes", "combien de temps",
      "longueur de la formation", "nombre d annees"
    ]
  },

  {
    id: "website",
    keys: [
      "website", "school website", "web address",
      "online registration", "website address",
      "online", "web portal", "school portal", "internet",
      "site web", "site internet", "inscription en ligne",
      "portail", "en ligne"
    ]
  },

  {
    id: "about",
    keys: [
      "about hemipt", "what is hemipt", "full name",
      "what does hemipt stand for", "university of bamenda",
      "school motto", "school slogan", "affiliation",
      "tell me about hemipt", "who are you", "what is this school",
      "hemipt overview", "about the school",
      "a propos de hemipt", "nom complet",
      "que signifie hemipt", "devise de l ecole",
      "universite de bamenda", "parlez moi de hemipt",
      "qu est ce que hemipt", "presentation de l ecole"
    ]
  },

  {
    id: "greeting",
    keys: [
      "hello", "hi", "good morning", "good afternoon",
      "good evening", "good day", "hey", "greetings",
      "bonjour", "bonsoir", "bonne journee",
      "salut", "coucou"
    ]
  },

  {
    id: "thanks",
    keys: [
      "thank you", "thanks", "thank you very much",
      "appreciate it", "much appreciated", "great thanks",
      "merci", "merci beaucoup", "je vous remercie", "grand merci"
    ]
  }
];


/* =====================================================
   3. SELECT HTML ELEMENTS
   ===================================================== */

const languageSelect = document.getElementById("language");
const topicsContainer = document.getElementById("topics");
const messagesContainer = document.getElementById("chat-messages");
const quickQuestionsContainer =
  document.getElementById("quick-questions");

const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-chat");

const welcomeTitle = document.getElementById("welcome-title");
const welcomeText = document.getElementById("welcome-text");
const eyebrow = document.getElementById("eyebrow");
const chatTitle = document.getElementById("chat-title");
const statusText = document.getElementById("status-text");
const suggestionLabel = document.getElementById("suggestion-label");
const infoNote = document.getElementById("info-note");
const chatFooter = document.getElementById("chat-footer");

let currentLanguage    = "en";
let hasMessaged        = false;
let typingTimeout      = null;   // tracks the pending bot-reply timeout
let conversationHistory = [];    // last N messages sent to OpenAI

/* ── OpenAI configuration ────────────────────────────────────
   LOCAL TESTING  → USE_PROXY = false  (key stored in browser)
   PRODUCTION     → USE_PROXY = true   (key lives in api.php on server)
   ──────────────────────────────────────────────────────────── */
const USE_PROXY   = false;
const AI_ENDPOINT = USE_PROXY
    ? "./api.php"
    : "https://api.groq.com/openai/v1/chat/completions";
const AI_MODEL         = "openai/gpt-oss-20b";
const AI_HISTORY_LIMIT = 6;      // last N messages kept for context
const AI_KEY_STORAGE   = "hemipt_openai_key";


/* =====================================================
   4A. OPENAI HELPERS
   ===================================================== */

function getApiKey() {
    return localStorage.getItem(AI_KEY_STORAGE) || "";
}

function setApiKey(key) {
    localStorage.setItem(AI_KEY_STORAGE, key.trim());
}

function removeApiKey() {
    localStorage.removeItem(AI_KEY_STORAGE);
}

function updateModeIndicator() {
    const badge = document.getElementById("ai-mode-badge");
    if (!badge) return;
    if (getApiKey()) {
        badge.textContent = " · AI mode ✦";
        badge.className = "ai-mode-badge ai-active";
    } else {
        badge.textContent = " · Local mode";
        badge.className = "ai-mode-badge";
    }
}

// Builds a system prompt from the English knowledge base so the AI stays
// grounded in real school information and never invents details.
function buildSystemPrompt() {
    const k = knowledge.en;
    return `You are HEMIPT Assistant, the official student guide for HEMS Higher Institute of Professionalism and Technology (HEMIPT) — a university institute in Cameroon, affiliated with the University of Bamenda.

Your role is to help prospective and current students with questions about HEMIPT. Be friendly, warm, and helpful.

RULES:
- Answer only based on the information provided below.
- If asked something not covered, say you do not have that detail and suggest contacting the school directly.
- Respond in the SAME language the user writes in (English or French).
- For fees and registration, always advise the student to verify with the school office before making any payment.
- Keep answers clear and well-organised. Use bullet points or numbered lists when helpful.
- Do not invent information.

SCHOOL INFORMATION:
${k.about}

${k.departments}

${k.fees}

${k.registration}

${k.registrationFees}

${k.payment}

${k.campuses}

${k.contacts}

${k.scholarship}

${k.facilities}

${k.vocational}

${k.degrees}

${k.duration}

${k.classes}`;
}

async function callOpenAI(userText) {
    // Add this message to history
    conversationHistory.push({ role: "user", content: userText });

    // Keep only the most recent messages to manage token usage
    if (conversationHistory.length > AI_HISTORY_LIMIT) {
        conversationHistory = conversationHistory.slice(-AI_HISTORY_LIMIT);
    }

    const payload = {
        model: AI_MODEL,
        messages: [
            { role: "system", content: buildSystemPrompt() },
            ...conversationHistory
        ],
        max_tokens: 600,
        temperature: 0.7
    };

    const headers = { "Content-Type": "application/json" };

    // In local mode (USE_PROXY = false) the key must be in the request header.
    // In production mode (USE_PROXY = true) the PHP proxy handles authentication.
    if (!USE_PROXY) {
        headers["Authorization"] = `Bearer ${getApiKey()}`;
    }

    const response = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers,
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        const msg = err.error?.message || `HTTP ${response.status}`;
        throw new Error(msg);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) throw new Error("Empty response from AI");

    // Store the assistant reply so follow-up questions have context
    conversationHistory.push({ role: "assistant", content: reply });

    return reply;
}


/* =====================================================
   4. NORMALIZE TEXT
   This handles accents and punctuation.
   ===================================================== */
function normalize(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* =====================================================
   5. DISPLAY CHAT MESSAGES
   ===================================================== */

// Parse and render basic Markdown from AI responses into safe DOM nodes.
// Handles: ### headings, **bold**, *italic*, * / - / • bullets,
// numbered lists, Markdown tables, <br> tags, and blank-line paragraph breaks.
function renderMarkdown(container, text) {
    const lines = text.split('\n');
    let listEl    = null;
    let listType  = null;
    let tableRows = [];   // buffer for consecutive pipe-table lines

    function flushList() {
        if (listEl) { container.appendChild(listEl); listEl = null; listType = null; }
    }

    // Convert **bold**, *italic*, <br> tags inline, then linkify the rest.
    // Safe: builds text nodes and elements — never sets innerHTML.
    function inlineFormat(parent, str) {
        // Split on <br> first so we can insert real <br> elements
        const brParts = str.split(/<br\s*\/?>/gi);
        brParts.forEach((segment, bi) => {
            if (bi > 0) parent.appendChild(document.createElement('br'));

            const pattern = /(\*\*(.+?)\*\*|\*([^*\n]+)\*)/g;
            let last = 0, m;
            while ((m = pattern.exec(segment)) !== null) {
                if (m.index > last) linkify(parent, segment.slice(last, m.index));
                if (m[2] !== undefined) {
                    const strong = document.createElement('strong');
                    strong.textContent = m[2];
                    parent.appendChild(strong);
                } else {
                    const em = document.createElement('em');
                    em.textContent = m[3];
                    parent.appendChild(em);
                }
                last = m.index + m[0].length;
            }
            if (last < segment.length) linkify(parent, segment.slice(last));
        });
    }

    // Render buffered pipe-table rows as a <table>
    function flushTable() {
        if (!tableRows.length) return;

        const table = document.createElement('table');
        table.className = 'md-table';
        let thead = null, tbody = null, headerDone = false;

        for (const row of tableRows) {
            // Separator row (|---|---|) → marks end of header
            if (/^\|[\s\-:|]+\|$/.test(row)) { headerDone = true; continue; }

            const cells = row.slice(1, -1).split('|').map(c => c.trim());

            if (!headerDone) {
                // First non-separator row is the header
                thead = document.createElement('thead');
                const tr = document.createElement('tr');
                cells.forEach(cell => {
                    const th = document.createElement('th');
                    inlineFormat(th, cell);
                    tr.appendChild(th);
                });
                thead.appendChild(tr);
                table.appendChild(thead);
                headerDone = true;
            } else {
                if (!tbody) { tbody = document.createElement('tbody'); table.appendChild(tbody); }
                const tr = document.createElement('tr');
                cells.forEach(cell => {
                    const td = document.createElement('td');
                    inlineFormat(td, cell);
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            }
        }

        if (table.children.length) container.appendChild(table);
        tableRows = [];
    }

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (!line) { flushList(); flushTable(); continue; }

        // Pipe-table row
        if (line.startsWith('|') && line.endsWith('|')) {
            flushList();
            tableRows.push(line);
            continue;
        }

        // Any non-pipe line flushes a table in progress
        flushTable();

        // Horizontal rule: --- or *** or ___
        if (/^[-*_]{3,}$/.test(line)) {
            flushList(); flushTable();
            container.appendChild(document.createElement('hr'));
            continue;
        }

        // Heading: # ## ###
        const hm = line.match(/^#{1,3}\s+(.+)/);
        if (hm) {
            flushList();
            const el = document.createElement('p');
            el.className = 'md-heading';
            inlineFormat(el, hm[1]);
            container.appendChild(el);
            continue;
        }

        // Bullet list: * - •
        const bm = line.match(/^[*\-•]\s+(.+)/);
        if (bm) {
            if (listType !== 'ul') {
                flushList();
                listEl = document.createElement('ul');
                listEl.className = 'md-list';
                listType = 'ul';
            }
            const li = document.createElement('li');
            inlineFormat(li, bm[1]);
            listEl.appendChild(li);
            continue;
        }

        // Numbered list: 1. 2. etc.
        const nm = line.match(/^\d+\.\s+(.+)/);
        if (nm) {
            if (listType !== 'ol') {
                flushList();
                listEl = document.createElement('ol');
                listEl.className = 'md-list';
                listType = 'ol';
            }
            const li = document.createElement('li');
            inlineFormat(li, nm[1]);
            listEl.appendChild(li);
            continue;
        }

        // Regular paragraph
        flushList();
        const p = document.createElement('p');
        p.className = 'md-para';
        inlineFormat(p, line);
        container.appendChild(p);
    }

    flushList();
    flushTable();
}

// Safely converts URLs, emails and phone numbers in bot responses
// into clickable <a> elements. Builds DOM nodes — never uses innerHTML.
function linkify(paragraph, text) {
    const pattern = /(https?:\/\/[^\s]+)|([\w.+-]+@[\w-]+\.\w+)|(\+\d[\d ]{8,15}\d)/g;
    let last = 0;
    let m;

    while ((m = pattern.exec(text)) !== null) {
        // Plain text before this match
        if (m.index > last) {
            paragraph.appendChild(
                document.createTextNode(text.slice(last, m.index))
            );
        }

        const a = document.createElement("a");
        a.textContent = m[0];
        a.rel = "noopener noreferrer";

        if (m[1]) {                               // URL
            a.href = m[1];
            a.target = "_blank";
        } else if (m[2]) {                        // email
            a.href = "mailto:" + m[2];
        } else {                                  // phone number
            a.href = "tel:" + m[3].replace(/\s/g, "");
        }

        paragraph.appendChild(a);
        last = m.index + m[0].length;
    }

    // Remaining plain text after the last match
    if (last < text.length) {
        paragraph.appendChild(
            document.createTextNode(text.slice(last))
        );
    }
}

function addMessage(text, sender, renderMd = false) {
    const wrapper = document.createElement("div");
    wrapper.className = sender === "user"
        ? "message user-message"
        : "message bot-message";

    // Column wrapper — holds bubble, timestamp and (for bot) copy button
    const bubbleWrap = document.createElement("div");
    bubbleWrap.className = "bubble-wrap";

    // AI responses → div.bot-bubble with markdown rendering
    // Everything else → plain <p> with linkify / textContent
    let bubble;
    if (renderMd) {
        bubble = document.createElement("div");
        bubble.className = "bot-bubble";
        renderMarkdown(bubble, text);
    } else {
        bubble = document.createElement("p");
        if (sender === "bot") {
            // Bot keyword responses: linkify URLs, emails and phone numbers
            linkify(bubble, text);
        } else {
            // User messages: plain text only — never trust user input as markup
            bubble.textContent = text;
        }
    }

    // Timestamp
    const timeEl = document.createElement("span");
    timeEl.className = "message-time";
    timeEl.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });

    bubbleWrap.appendChild(bubble);
    bubbleWrap.appendChild(timeEl);

    // Copy button — bot messages only
    if (sender === "bot") {
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "copy-button";
        copyBtn.setAttribute("aria-live", "polite");   // announces "Copied!" to screen readers
        copyBtn.textContent = "Copy";
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = "Copied!";
                setTimeout(() => { copyBtn.textContent = "Copy"; }, 1500);
            });
        });
        bubbleWrap.appendChild(copyBtn);
    }

    // Bot avatar — shown to the left of every bot bubble
    if (sender === "bot") {
        const avatar = document.createElement("img");
        avatar.src = "b.jpg";
        avatar.alt = "";   // decorative — screen readers should not announce it on every reply
        avatar.className = "bot-msg-avatar";
        wrapper.appendChild(avatar);
    }

    wrapper.appendChild(bubbleWrap);
    messagesContainer.appendChild(wrapper);

    // Return the wrapper so askQuestion() can scroll to it
    return wrapper;
}


/* =====================================================
   6. FIND THE MOST RELEVANT ANSWER
   ===================================================== */

function findAnswer(question) {
  const cleanQuestion = normalize(question);

  if (!cleanQuestion) {
    return knowledge[currentLanguage].fallback;
  }

  // Words ≥5 chars used for stem matching below
  const questionWords = cleanQuestion.split(" ").filter(w => w.length >= 5);

  let bestIntent = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;

    for (const rawKeyword of intent.keys) {
      const keyword = normalize(rawKeyword);

      if (!keyword) continue;

      // 1. Exact full match — highest score
      if (cleanQuestion === keyword) {
        score += 20;
        continue;
      }

      // 2. Whole-word / phrase match inside the question
      if (
        cleanQuestion.includes(" " + keyword + " ") ||
        cleanQuestion.startsWith(keyword + " ") ||
        cleanQuestion.endsWith(" " + keyword)
      ) {
        score += keyword.split(" ").length * 4;
        continue;
      }

      // 3. Keyword appears anywhere inside the question
      if (cleanQuestion.includes(keyword)) {
        score += keyword.split(" ").length * 3;
        continue;
      }

      // 4. Stem matching — single-word keywords ≥5 chars
      //    Catches plurals and verb forms not listed explicitly.
      //    e.g. "scholarships" matches keyword "scholarship",
      //         "registering" matches keyword "regist" prefix
      if (!keyword.includes(" ") && keyword.length >= 5) {
        const stem = keyword.substring(0, 5);
        if (questionWords.some(w => w.substring(0, 5) === stem)) {
          score += 2;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore > 0) {
    return knowledge[currentLanguage][bestIntent.id];
  }

  return knowledge[currentLanguage].fallback;
}


/* =====================================================
   7. ASK A QUESTION
   ===================================================== */
async function askQuestion(question) {
    const text = String(question || "").trim();

    if (!text) return;

    // 1. Display the user's question
    const userMessage = addMessage(text, "user");

    // 2. Hide suggestion chips after the first message
    if (!hasMessaged) {
        hasMessaged = true;
        const area = document.querySelector(".suggestion-area");
        area.classList.add("suggestions-hidden");
        area.setAttribute("aria-hidden", "true");
    }

    // 3. Lock input while the bot is responding
    input.disabled = true;
    sendButton.disabled = true;
    input.value = "";

    // 4. Show typing indicator
    const typingWrapper = document.createElement("div");
    typingWrapper.className = "message bot-message";
    typingWrapper.setAttribute("aria-hidden", "true");

    const typingBubble = document.createElement("div");
    typingBubble.className = "typing-bubble";
    typingBubble.innerHTML = "<span></span><span></span><span></span>";

    typingWrapper.appendChild(typingBubble);
    messagesContainer.appendChild(typingWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 5. Get the answer — AI if key is configured, keyword matching otherwise.
    //    For keyword matching we keep a 1500ms delay so the typing animation
    //    plays; for AI the real network time acts as the natural delay.
    let answer;
    let aiError   = null;
    let isAiReply = false;
    try {
        if (getApiKey()) {
            answer    = await callOpenAI(text);
            isAiReply = true;
        } else {
            answer = await new Promise(resolve => {
                typingTimeout = setTimeout(() => {
                    typingTimeout = null;
                    resolve(findAnswer(text));
                }, 1500);
            });
        }
    } catch (err) {
        aiError = err.message;
        console.error("AI call failed:", aiError);
        answer = findAnswer(text);
    }

    // 6. Guard: if resetChat() fired while we were waiting, the indicator
    //    has been removed and the input is already unlocked — just bail.
    if (!messagesContainer.contains(typingWrapper)) return;

    // 7. Replace indicator with the real answer
    messagesContainer.removeChild(typingWrapper);

    // If AI failed, show the error so it's diagnosable
    if (aiError) {
        const errNote = document.createElement("p");
        errNote.className = "ai-error-note";
        errNote.textContent = "⚠ AI unavailable (" + aiError + ") — showing keyword result.";
        messagesContainer.appendChild(errNote);
    }

    addMessage(answer, "bot", isAiReply);

    requestAnimationFrame(() => {
        const paddingTop = parseInt(getComputedStyle(messagesContainer).paddingTop) || 0;
        messagesContainer.scrollTo({
            top: Math.max(0, userMessage.offsetTop - paddingTop),
            behavior: "smooth"
        });
    });

    // 8. Unlock input
    input.disabled = false;
    sendButton.disabled = false;
    input.focus();
}



/* =====================================================
   8. HANDLE THE CHAT FORM
   ===================================================== */

form.addEventListener("submit", function(event) {
  event.preventDefault();
  askQuestion(input.value);
});


/* =====================================================
   9. DISPLAY DEPARTMENT AND TOPIC BUTTONS
   ===================================================== */

function renderTopics() {
  topicsContainer.replaceChildren();

  knowledge[currentLanguage].topics.forEach(topic => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "topic-button";

    const icon = document.createElement("span");

    icon.className = "topic-icon";
    icon.textContent = topic.icon;
    icon.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");

    label.className = "topic-label";
    label.textContent = topic.label;

    button.appendChild(icon);
    button.appendChild(label);

    button.addEventListener("click", function() {
      askQuestion(topic.question);
    });

    topicsContainer.appendChild(button);
  });
}


/* =====================================================
   10. DISPLAY QUICK QUESTIONS
   ===================================================== */

function renderQuickQuestions() {
  quickQuestionsContainer.replaceChildren();

  knowledge[currentLanguage].quick.forEach(question => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quick-button";
    button.textContent = question;

    button.addEventListener("click", function() {
      askQuestion(question);
    });

    quickQuestionsContainer.appendChild(button);
  });
}


/* =====================================================
   11. CHANGE LANGUAGE
   ===================================================== */

function changeLanguage() {
  currentLanguage = languageSelect.value;

  const data = knowledge[currentLanguage];

  document.documentElement.lang = currentLanguage;

  welcomeTitle.textContent = data.welcomeTitle;
  welcomeText.textContent = data.welcomeText;
  eyebrow.textContent = data.eyebrow;
  chatTitle.textContent = data.chatTitle;
  statusText.textContent = data.ready;
  input.placeholder = data.placeholder;
  sendButton.textContent = data.send;
  suggestionLabel.textContent = data.tryAsking;
  infoNote.textContent = data.notice;
  document.getElementById("footer-text").textContent = data.footer;

  renderTopics();
  renderQuickQuestions();
}

languageSelect.addEventListener("change", function() {
  changeLanguage();
  resetChat();   // clear stale messages so the new language starts fresh
});


/* =====================================================
   12. CLEAR THE CONVERSATION
   ===================================================== */

function resetChat() {
  // Cancel any pending keyword-matching timeout and unlock the input
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
  input.disabled = false;
  sendButton.disabled = false;

  // Clear conversation history so the next chat starts fresh
  conversationHistory = [];

  messagesContainer.replaceChildren();
  hasMessaged = false;

  const area = document.querySelector(".suggestion-area");
  area.classList.remove("suggestions-hidden");
  area.removeAttribute("aria-hidden");

  addMessage(
    knowledge[currentLanguage].welcome,
    "bot"
  );
}

clearButton.addEventListener("click", resetChat);


/* =====================================================
   13. SETTINGS MODAL
   ===================================================== */

(function initSettings() {
    const modal      = document.getElementById("settings-modal");
    const openBtn    = document.getElementById("settings-btn");
    const closeBtn   = document.getElementById("settings-close");
    const keyInput   = document.getElementById("api-key-input");
    const toggleBtn  = document.getElementById("toggle-key-btn");
    const saveBtn    = document.getElementById("save-key-btn");
    const removeBtn  = document.getElementById("remove-key-btn");
    const statusEl   = document.getElementById("settings-status");

    function openModal() {
        const existing = getApiKey();
        keyInput.value = existing
            ? existing.slice(0, 4) + "…" + existing.slice(-4)
            : "";
        setStatus("", "");
        modal.removeAttribute("hidden");
        keyInput.focus();
    }

    function closeModal() {
        modal.setAttribute("hidden", "");
        keyInput.value = "";
    }

    function setStatus(msg, type) {
        statusEl.textContent = msg;
        statusEl.className = "settings-status" + (type ? " status-" + type : "");
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hasAttribute("hidden")) closeModal();
    });

    // Show / hide key
    toggleBtn.addEventListener("click", () => {
        const isHidden = keyInput.type === "password";
        keyInput.type = isHidden ? "text" : "password";
    });

    saveBtn.addEventListener("click", () => {
        const val = keyInput.value.trim();
        if (!val || val.includes("…")) {
            setStatus("Please enter a valid API key.", "err");
            return;
        }
        if (!val.startsWith("sk-") && !val.startsWith("gsk_")) {
            setStatus("Key should start with sk- or gsk_", "err");
            return;
        }
        setApiKey(val);
        updateModeIndicator();
        setStatus("Key saved — AI mode is now active.", "ok");
        setTimeout(closeModal, 1200);
    });

    removeBtn.addEventListener("click", () => {
        removeApiKey();
        conversationHistory = [];
        updateModeIndicator();
        keyInput.value = "";
        setStatus("Key removed — switched to Local mode.", "ok");
    });
})();


/* =====================================================
   14. START THE CHATBOT
   ===================================================== */

function startChatbot() {
  changeLanguage();
  resetChat();
  updateModeIndicator();
}

startChatbot();
