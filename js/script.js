/**
 * MindMate – AI Learning Assistant
 * Home Page Client Logic & Multilingual State Management
 */

// ---------------- Translations Dictionary ----------------
const translations = {
  en: {
    navHome: "Home",
    navFeatures: "Features",
    navAbout: "About",
    navStart: "Get Started",
    heroBadge: "🎓 Built for College Students Across All Departments",
    heroTitle: "Learn at your pace.<br><span class=\"text-gradient\">Understand your way.</span>",
    heroDescription: "MindMate is your 24/7 AI-powered study buddy tailored for college students. Break down complex engineering, arts, science, and commerce concepts into simple language, interactive quizzes, and bite-sized insights.",
    langLabel: "Choose your preferred study language:",
    btnStart: "Start Learning",
    btnExplore: "Explore Features",
    trustFree: "Free for Students",
    trustLang: "Languages Supported",
    trustDepts: "Major Departments",
    
    // Preview Card
    previewStudentTag: "College Student (Engineering)",
    previewStatus: "MindMate AI • Ready to explain",
    previewLangChip: "English Mode",
    previewTryPrompt: "Try sample topic:",
    
    // Features Section
    featuresPill: "Powerful Academic Features",
    featuresTitle: "Everything You Need to Ace College Exams",
    featuresSubtitle: "Tailored specifically for undergraduate and postgraduate students seeking stress-free conceptual clarity.",
    
    card1Badge: "Core Engine",
    card1Title: "AI Concept Explainer",
    card1Desc: "Transform dense textbooks and lecture notes into intuitive real-life analogies. Ask follow-up questions until the concept clicks completely.",
    card1Item1: "Real-life relatable examples",
    card1Item2: "Customizable difficulty depth",

    card2Badge: "Language Freedom",
    card2Title: "Multilingual Learning",
    card2Desc: "Language shouldn't be a barrier to scoring high. Learn seamlessly in formal English, authentic Tamil (தமிழ்), or everyday spoken Tanglish.",
    card2Item1: "Tamil & Tanglish native support",
    card2Item2: "Instant one-click translation",

    card3Badge: "Active Recall",
    card3Title: "Smart Quizzes",
    card3Desc: "Generate adaptive practice quizzes from your syllabus topics. Receive instant grading with step-by-step reasoning for every answer.",
    card3Item1: "Multiple choice & short questions",
    card3Item2: "Immediate explanations for mistakes",

    card4Badge: "Analytics",
    card4Title: "Progress Tracking",
    card4Desc: "Track chapter completion, study streaks, and topic confidence metrics to know exactly where you stand before semester examinations.",
    card4Item1: "Daily study streak tracker",
    card4Item2: "Subject-wise confidence score",

    // About Section
    aboutBadge: "About MindMate",
    aboutTitle: "Designed to Make College Studies Stress-Free",
    aboutDesc1: "College syllabi are heavy, semesters move fast, and standard textbooks often fail to explain core fundamentals intuitively. MindMate was born to give every student an approachable, friendly mentor.",
    aboutDesc2: "Whether you are an engineering student wrestling with circuit theory, a commerce student balancing ledgers, or an arts student analyzing literature, MindMate speaks your language and adapts to your thinking style.",
    quoteText: "\"Education becomes powerful when you don't have to translate your thoughts twice. MindMate lets you think in your mother tongue and learn at your own pace.\"",
    authorSub: "Empowering every collegiate learner",

    // CTA
    ctaTitle: "Ready to Elevate Your College Journey?",
    ctaDesc: "Join thousands of students who understand concepts faster, retain longer, and prepare with confidence.",
    ctaBtn: "Start Learning Now – It's Free",

    // Footer
    footerTagline: "Personalized AI Learning Assistant for College Students. Learn in English, தமிழ், or Tanglish.",
    footerNavTitle: "Quick Navigation",
    footerLangTitle: "Languages",
    footerFeaturesTitle: "Core Features"
  },

  ta: {
    navHome: "முகப்பு",
    navFeatures: "அம்சங்கள்",
    navAbout: "எங்களைப் பற்றி",
    navStart: "தொடங்குங்கள்",
    heroBadge: "🎓 அனைத்துத் துறை கல்லூரி மாணவர்களுக்கான பிரத்யேக தளம்",
    heroTitle: "உங்கள் வேகத்தில் கற்கலாம்.<br><span class=\"text-gradient\">உங்கள் வழியில் புரியலாம்.</span>",
    heroDescription: "கல்லூரி மாணவர்களுக்கான 24/7 தனிப்பயனாக்கப்பட்ட AI படிப்பு வழிகாட்டி. பொறியியல், கலை, அறிவியல் மற்றும் வணிகவியல் பாடங்களின் கடினமான கருத்துக்களை எளிய விளக்கங்கள், வினாடி வினாக்கள் மூலம் தெளிவாகப் புரிந்து கொள்ளுங்கள்.",
    langLabel: "உங்கள் விருப்ப மொழியைத் தேர்வுசெய்யவும்:",
    btnStart: "படிக்கத் தொடங்குங்கள்",
    btnExplore: "அம்சங்களைப் பாருங்கள்",
    trustFree: "மாணவர்களுக்கு முற்றிலும் இலவசம்",
    trustLang: "ஆதரிக்கும் மொழிகள்",
    trustDepts: "அனைத்து முக்கிய துறைகள்",
    
    // Preview Card
    previewStudentTag: "கல்லூரி மாணவர் (பொறியியல்)",
    previewStatus: "MindMate AI • விளக்கத் தயாராக உள்ளது",
    previewLangChip: "தமிழ் பயன்முறை",
    previewTryPrompt: "மாதிரி தலைப்பைத் தேர்ந்தெடுக்கவும்:",

    // Features Section
    featuresPill: "முக்கியக் கல்வி அம்சங்கள்",
    featuresTitle: "கல்லூரித் தேர்வுகளில் சாதிக்க தேவையான அனைத்தும்",
    featuresSubtitle: "மன அழுத்தம் இல்லாமல் பாடங்களை ஆழமாகப் புரிந்து படிக்க விரும்பும் மாணவர்களுக்காக உருவாக்கப்பட்டது.",

    card1Badge: "முக்கிய திறன்",
    card1Title: "AI பாட விளக்க உரைஞர்",
    card1Desc: "கடினமான பாடப் புத்தகக் குறிப்புகளை எளிய அன்றாட வாழ்க்கை உதாரணங்களுடன் விளக்குகிறது. சந்தேகம் தீரும் வரை எத்தனை முறை வேண்டுமானாலும் கேட்கலாம்.",
    card1Item1: "எளிய நிஜ வாழ்க்கை எடுத்துக்காட்டுகள்",
    card1Item2: "தேவைக்கேற்ற விளக்க ஆழம்",

    card2Badge: "மொழி சுதந்திரம்",
    card2Title: "பன்மொழி கற்றல்",
    card2Desc: "மொழி இனி கல்விக்குத் தடையாக இருக்காது. ஆங்கிலம், தூய தமிழ் அல்லது அன்றாட தங்கிலீஷில் உங்கள் பாடங்களை எளிதாகக் கற்றுக்கொள்ளுங்கள்.",
    card2Item1: "தமிழ் & தங்கிலீஷ் முழு ஆதரவு",
    card2Item2: "ஒரே கிளிக்கில் உடனடி மொழிமாற்றம்",

    card3Badge: "சுய மதிப்பீடு",
    card3Title: "அறிவார்ந்த வினாடி வினா",
    card3Desc: "உங்கள் பாடத்திட்டத்தின் அடிப்படையில் தானியங்கி மாதிரி வினாக்களை உருவாக்குகிறது. ஒவ்வொரு விடைக்கும் உடனடி மதிப்பெண் மற்றும் விளக்கம் பெறலாம்.",
    card3Item1: "கொள்குறி & சிறு வினாக்கள்",
    card3Item2: "தவறுகளுக்கான உடனடி விளக்கங்கள்",

    card4Badge: "கண்காணிப்பு",
    card4Title: "முன்னேற்றக் கண்காணிப்பு",
    card4Desc: "பாட முடிவுகள், தினசரி படிப்பு பழக்கம் மற்றும் தன்னம்பிக்கை அளவை வரைபடமாகப் பார்த்து பருவதேர்வுக்குத் தயாராகலாம்.",
    card4Item1: "தினசரி படிப்பு பழக்கக் காட்டி",
    card4Item2: "பாடம் சார்ந்த நம்பிக்கை மதிப்பெண்",

    // About Section
    aboutBadge: "MindMate பற்றி",
    aboutTitle: "கல்லூரிப் படிப்பை எளிதாக்க வடிவமைக்கப்பட்டது",
    aboutDesc1: "கல்லூரி பாடத்திட்டங்கள் பெரிதாகவும், செமஸ்டர் விரைவாகவும் நகர்கிறது. பெரும்பாலான புத்தகங்கள் அடிப்படைகளை மாணவர் நோக்கில் எளிதாக விளக்குவதில்லை. மாணவர்களுக்கு ஒரு சிறந்த நண்பனாக உதவவே MindMate உருவாக்கப்பட்டது.",
    aboutDesc2: "நீங்கள் சர்க்யூட் தியரி படிக்கும் பொறியியல் மாணவராக இருந்தாலும், பேலன்ஸ் ஷீட் போடும் காமர்ஸ் மாணவராக இருந்தாலும், MindMate உங்கள் மொழியில் உங்களுக்குப் புரியும் விதத்தில் கற்பிக்கும்.",
    quoteText: "\"உங்கள் எண்ணங்களை இருமுறை மொழிபெயர்க்க வேண்டிய அவசியம் இல்லாதபோதே கல்வி உண்மையான வலிமை பெறுகிறது. தாய்மொழியிலேயே யோசித்து, உங்கள் வேகத்திலேயே கற்கலாம்.\"",
    authorSub: "மாணவர் முன்னேற்றத்திற்கான முயற்சி",

    // CTA
    ctaTitle: "உங்கள் கல்லூரிப் படிப்பில் சிறந்து விளங்கத் தயாரா?",
    ctaDesc: "பாடங்களை விரைவாகப் புரிந்து, தன்னம்பிக்கையோடு தேர்வுகளை எதிர்கொள்ளும் ஆயிரக்கணக்கான மாணவர்களுடன் இணையுங்கள்.",
    ctaBtn: "இப்போதே இலவசமாகத் தொடங்குங்கள்",

    // Footer
    footerTagline: "கல்லூரி மாணவர்களுக்கான பிரத்யேக AI கற்றல் வழிகாட்டி. ஆங்கிலம், தமிழ் அல்லது தங்கிலீஷில் கற்கலாம்.",
    footerNavTitle: "விரைவு இணைப்புகள்",
    footerLangTitle: "மொழிகள்",
    footerFeaturesTitle: "முக்கிய அம்சங்கள்"
  },

  tanglish: {
    navHome: "Home",
    navFeatures: "Features",
    navAbout: "About Us",
    navStart: "Start Pannunga",
    heroBadge: "🎓 All Department College Students-kaaga Dedicated Platform",
    heroTitle: "Ungal pace-la padikalam.<br><span class=\"text-gradient\">Ungalukku puriyura maadhiri kathukalam.</span>",
    heroDescription: "College students-kaana 24/7 personalized AI study buddy. Engineering, Arts, Science & Commerce-la tough concepts-ah simple real-life analogies, quick quizzes & easy Tanglish-la semma clear-ah purinjikonga.",
    langLabel: "Study panna language choose pannunga:",
    btnStart: "Start Learning",
    btnExplore: "Features Parunga",
    trustFree: "Students-ku 100% Free",
    trustLang: "Languages Supported",
    trustDepts: "All Major Depts",

    // Preview Card
    previewStudentTag: "College Student (Engineering)",
    previewStatus: "MindMate AI • Explain panna ready",
    previewLangChip: "Tanglish Mode",
    previewTryPrompt: "Topic choose panni paarunga:",

    // Features Section
    featuresPill: "Top Academic Features",
    featuresTitle: "Semester Exams-la High Score Vanga Everything Ready",
    featuresSubtitle: "Bore adikama, tension illama concepts-ah crystal clear-ah understand panna built aana smart tool.",

    card1Badge: "Core Engine",
    card1Title: "AI Concept Explainer",
    card1Desc: "Boring textbook definitions-ah simple everyday examples-oda explain pannum. Doubts theerura varaikkum thirumba thirumba kettu clear pannikalam.",
    card1Item1: "Simple real-life relatable examples",
    card1Item2: "Depth-ah ungalukku thagundha maadhiri mathikalam",

    card2Badge: "Language Freedom",
    card2Title: "Multilingual Learning",
    card2Desc: "Language barrier-nu sollitu marks vida koodadhu! Pure English, Senthamizh, illa friendly Tanglish — ungalukku edhu suit aagudho adhilaye padikalam.",
    card2Item1: "Tamil & Tanglish native support",
    card2Item2: "Single-click-la easy language switch",

    card3Badge: "Active Practice",
    card3Title: "Smart Quizzes",
    card3Desc: "Unga syllabus chapters-la irundhu instant MCQs & test questions generate pannum. Thappa pona reason-oda answer-ah explain pannum.",
    card3Item1: "MCQ & Short questions test",
    card3Item2: "Mistakes-ku immediate detailed logic",

    card4Badge: "Analytics",
    card4Title: "Progress Tracking",
    card4Desc: "Daily study streaks, topic confidence meters, and semester exam readiness-ah track panni, focus panna vendiya topics-ah find out pannalam.",
    card4Item1: "Daily study streak tracking",
    card4Item2: "Subject-wise confidence score",

    // About Section
    aboutBadge: "MindMate Pathi",
    aboutTitle: "College Studies-ah Simple & Tension-Free Aakka Built Panna Platform",
    aboutDesc1: "Semesters fast-ah pogum, syllabus perusa irukum, but textbooks concept-ah straightforward-ah explain panna maattangla? Adhanaala dhaan ungalukku oru friendly 24/7 study mentor maadhiri MindMate create pannom.",
    aboutDesc2: "Neenga circuit theory padikura Engineering student aanaalum, balance sheet tally pandra Commerce student aanaalum, MindMate unga style-la, unga language-la neat-ah explain pannum.",
    quoteText: "\"Namaku purinja baashai-la yosikum podhu dhaan studies easy aagum. MindMate unga own language-la think panni, unga speed-la padika help pannum.\"",
    authorSub: "For every hardworking college student",

    // CTA
    ctaTitle: "College Studies-la Next Level Poga Ready-ah?",
    ctaDesc: "Join thousands of college friends who learn faster, retain better, and clear exams with confidence.",
    ctaBtn: "Start Learning Now – It's Free",

    // Footer
    footerTagline: "College students-kaana personalized AI Learning Assistant. English, தமிழ், or Tanglish-la padikalam.",
    footerNavTitle: "Quick Navigation",
    footerLangTitle: "Languages",
    footerFeaturesTitle: "Core Features"
  }
};

// ---------------- Demo Topics Dictionary (Interactive Preview) ----------------
const demoTopics = {
  recursion: {
    en: {
      question: "\"Can you explain Recursion with a simple real-life analogy? Preparing for semester exams!\"",
      answer: "<p><strong>Think of Russian Nesting Dolls (Matryoshka):</strong></p><p>Inside each doll is a smaller version of itself. You keep opening smaller dolls until you hit the tiny solid one at the center!</p><div class=\"concept-callout\">💡 <strong>Base Case:</strong> That smallest center doll. Without it, you would keep searching forever in an infinite loop!</div>"
    },
    ta: {
      question: "\"ரிகர்ஷன் (Recursion) என்றால் என்ன? எளிமையான நிஜ வாழ்க்கை உதாரணத்தோடு விளக்க முடியுமா?\"",
      answer: "<p><strong>ஒரு மரப் பொம்மையின் உள் பொம்மை போன்றது:</strong></p><p>ஒவ்வொரு பொம்மையைத் திறக்கும் போதும் அதற்குள் அதேபோன்ற சிறிய பொம்மை இருக்கும். மிகச் சிறிய கடைசிப் பொம்மை வரும் வரை இது தொடரும்!</p><div class=\"concept-callout\">💡 <strong>அடிப்படை நிபந்தனை (Base Case):</strong> அந்தக் கடைசி சிறிய பொம்மை தான் நிபந்தனை. அது இல்லையென்றால் நில்லாமல் முடிவிலி சுழற்சி (Infinite loop) ஆகிவிடும்!</div>"
    },
    tanglish: {
      question: "\"Bro, Recursion pathi simple-ah Tanglish-la explain panna mudiyuma? Exam-ku purila!\"",
      answer: "<p><strong>Kandippa! Simple analogy vachu purinjikalam:</strong></p><p>Russian Nesting Dolls paathurukkiya? Oru doll kula innoru chinna doll irukum. Adha open panna innum chinna doll varum. Kadaisiya periya doll-ae illama kadaisi limit vara varaikkum repeat aagum!</p><div class=\"concept-callout\">💡 <strong>Base Case:</strong> Kadaisi chinna doll (stopping condition). Idhu illana infinite loop aagirum!</div>"
    }
  },
  photosynthesis: {
    en: {
      question: "\"How does Photosynthesis work? Explain simply for Botany finals.\"",
      answer: "<p><strong>Think of leaves as Solar-Powered Mini Kitchens:</strong></p><p>The leaf absorbs sunlight (solar energy), takes water from roots, and breathes in CO2 from air to cook delicious Glucose (plant food) while releasing fresh Oxygen!</p><div class=\"concept-callout\">💡 <strong>Key Formula:</strong> Sunlight + Water + CO2 ➔ Glucose + Oxygen.</div>"
    },
    ta: {
      question: "\"ஒளிச்சேர்க்கை (Photosynthesis) எவ்வாறு நடைபெறுகிறது? தாவரவியல் தேர்வுக்கு எளிதாக விளக்குங்கள்.\"",
      answer: "<p><strong>தாவர இலைகளை ஒரு சோலார் சமையலறையாகக் கற்பனை செய்யுங்கள்:</strong></p><p>இலைகள் சூரிய ஒளியைப் பெற்று, வேரிலிருந்து நீரையும், காற்றிலிருந்து கரியமில வாயுவையும் எடுத்து குளுக்கோஸ் உணவைத் தயாரிக்கின்றன; பிராண வாயுவை (Oxygen) வெளியேற்றுகின்றன!</p><div class=\"concept-callout\">💡 <strong>சூத்திரம்:</strong> சூரிய ஒளி + நீர் + கார்பன் டை ஆக்சைடு ➔ குளுக்கோஸ் + ஆக்ஸிஜன்.</div>"
    },
    tanglish: {
      question: "\"Photosynthesis process-ah semma simple-ah brief pannunga for Botany exam!\"",
      answer: "<p><strong>Leaf-ah oru Solar Kitchen maadhiri imagine pannikonga:</strong></p><p>Sunlight (solar power), roots vazhiya water, and air-la irundhu CO2 eduthukittu, plant thanakku thevaiyaana Glucose food-ah cook pannum, bonus-ah namakku Oxygen tharum!</p><div class=\"concept-callout\">💡 <strong>Simple Formula:</strong> Sunlight + Water + CO2 ➔ Glucose + Oxygen.</div>"
    }
  },
  "balance-sheet": {
    en: {
      question: "\"What is the golden rule of a Balance Sheet in Accountancy?\"",
      answer: "<p><strong>Think of a weighing scale that must always stay balanced:</strong></p><p>Assets (what the company owns) must exactly equal Liabilities (what it owes) + Equity (owner's investment).</p><div class=\"concept-callout\">💡 <strong>Golden Equation:</strong> Assets = Liabilities + Shareholder Equity. Both sides must always match!</div>"
    },
    ta: {
      question: "\"இருப்புநிலைக் குறிப்பின் (Balance Sheet) பொன் விதி என்ன? வணிகவியல் மாணவர்களுக்காக விளக்குக.\"",
      answer: "<p><strong>எப்போதும் சரிசமமாக இருக்கும் தராசு முள்ளைப் போன்றது:</strong></p><p>சொத்துக்கள் (Assets) எப்போதும் பொறுப்புகள் (Liabilities) மற்றும் உரிமையாளர் முதலீட்டிற்கு (Equity) சமமாக இருக்க வேண்டும்.</p><div class=\"concept-callout\">💡 <strong>பொன் சமன்பாடு:</strong> சொத்துக்கள் = பொறுப்புகள் + மூலதனம். இரண்டு பக்கமும் எப்போதும் சரியாகப் பொருந்த வேண்டும்!</div>"
    },
    tanglish: {
      question: "\"Balance sheet golden rule enna? Commerce exam-la eppovum confuse aagudhu!\"",
      answer: "<p><strong>Oru perfect weighing scale maadhiri thaan:</strong></p><p>Company kitta enna irukko (Assets) adhu, company yaarukellam kudukanumo (Liabilities) + Owner investment (Equity)-ku accurate-ah match aaganum.</p><div class=\"concept-callout\">💡 <strong>Golden Equation:</strong> Assets = Liabilities + Equity. Rendu side-um tally aana dhaan correct!</div>"
    }
  }
};

// ---------------- Application State ----------------
let currentLanguage = localStorage.getItem("mindmate_lang") || "en";
let currentDemoTopic = "recursion";

// ---------------- DOM Element References ----------------
const headerLangSelect = document.getElementById("headerLangSelect");
const langPills = document.querySelectorAll(".lang-pill");
const footerLangLinks = document.querySelectorAll(".footer-lang-link");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");
const currentYearSpan = document.getElementById("currentYear");

// Preview Elements
const previewUserQuestion = document.getElementById("previewUserQuestion");
const previewAiAnswer = document.getElementById("previewAiAnswer");
const previewLangChip = document.getElementById("previewLangChip");
const previewHeaderStatus = document.getElementById("previewHeaderStatus");
const promptPills = document.querySelectorAll(".prompt-pill");

// Buttons & Modal Elements
const btnStartLearning = document.getElementById("btnStartLearning");
const navStartBtn = document.getElementById("navStartBtn");
const ctaStartBtn = document.getElementById("ctaStartBtn");
const welcomeModal = document.getElementById("welcomeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalConfirmBtn = document.getElementById("modalConfirmBtn");
const modalActiveLang = document.getElementById("modalActiveLang");

// ---------------- Language Switching Functionality ----------------
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("mindmate_lang", lang);

  // 1. Update font-family style if Tamil
  if (lang === "ta") {
    document.body.style.fontFamily = "var(--font-tamil)";
  } else {
    document.body.style.fontFamily = "var(--font-main)";
  }

  // 2. Update translated text elements
  const trans = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (trans[key] !== undefined) {
      // If translation contains HTML tags (like <br> or <span>), use innerHTML
      if (trans[key].includes("<")) {
        element.innerHTML = trans[key];
      } else {
        element.textContent = trans[key];
      }
    }
  });

  // 3. Update Header Dropdown
  if (headerLangSelect) {
    headerLangSelect.value = lang;
  }

  // 4. Update Hero Pills active state
  langPills.forEach(pill => {
    const pillLang = pill.getAttribute("data-lang");
    const isActive = pillLang === lang;
    pill.classList.toggle("active", isActive);
    pill.setAttribute("aria-checked", isActive ? "true" : "false");
  });

  // 5. Update Interactive Demo Card Content
  updateDemoCard(currentDemoTopic, lang);

  // 6. Update Preview Chip Text
  if (previewLangChip) {
    if (lang === "ta") previewLangChip.textContent = "தமிழ் பதிப்பு";
    else if (lang === "tanglish") previewLangChip.textContent = "Tanglish Mode";
    else previewLangChip.textContent = "English Mode";
  }

  // 7. Update Modal active language display
  if (modalActiveLang) {
    const langNames = { en: "English", ta: "தமிழ் (Tamil)", tanglish: "Tanglish" };
    modalActiveLang.textContent = langNames[lang] || lang;
  }
}

// ---------------- Update Interactive Preview Mock ----------------
function updateDemoCard(topicKey, lang) {
  const topicData = demoTopics[topicKey];
  if (!topicData) return;
  
  const content = topicData[lang] || topicData["en"];
  if (previewUserQuestion) {
    previewUserQuestion.textContent = content.question;
  }
  if (previewAiAnswer) {
    previewAiAnswer.innerHTML = content.answer;
  }
}

// ---------------- Event Listeners Setup ----------------
function initEventListeners() {
  // 1. Header Dropdown Change
  if (headerLangSelect) {
    headerLangSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // 2. Hero Language Pills Click
  langPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const selectedLang = pill.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  // 3. Footer Language Links Click
  footerLangLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = link.getAttribute("data-lang");
      setLanguage(selectedLang);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // 4. Interactive Topic Pills Click
  promptPills.forEach(pill => {
    pill.addEventListener("click", () => {
      promptPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentDemoTopic = pill.getAttribute("data-topic");
      updateDemoCard(currentDemoTopic, currentLanguage);
    });
  });

  // 5. Mobile Navigation Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // 6. Sticky Navbar Shadow on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 7. Modal Handlers
  function openWelcomeModal() {
    if (welcomeModal) {
      welcomeModal.classList.add("active");
      welcomeModal.setAttribute("aria-hidden", "false");
    }
  }

  function closeWelcomeModal() {
    if (welcomeModal) {
      welcomeModal.classList.remove("active");
      welcomeModal.setAttribute("aria-hidden", "true");
    }
  }

  if (btnStartLearning) btnStartLearning.addEventListener("click", openWelcomeModal);
  if (navStartBtn) navStartBtn.addEventListener("click", openWelcomeModal);
  if (ctaStartBtn) ctaStartBtn.addEventListener("click", openWelcomeModal);

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeWelcomeModal);
  if (modalConfirmBtn) modalConfirmBtn.addEventListener("click", closeWelcomeModal);

  if (welcomeModal) {
    welcomeModal.addEventListener("click", (e) => {
      if (e.target === welcomeModal) closeWelcomeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && welcomeModal.classList.contains("active")) {
      closeWelcomeModal();
    }
  });

  // 8. Footer Copyright Year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

// ---------------- Initialize on DOM Load ----------------
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  setLanguage(currentLanguage);
});
