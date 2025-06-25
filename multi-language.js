// Multi-Language System
const translations = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience", 
    contact: "Contact",
    aboutMeTitle: "About Me",
    aboutMeP1: "I am Daniel, a multifaceted man: son, father, hybrid athlete, Christian, mountaineer, and amateur photographer. But among my many roles, it's software development that I want to talk about.",
    aboutMeP2: "I believe in the transformative power of technology to empower people to achieve their wildest dreams. If you're looking for a passionate, experienced software developer, look no further!",
    aboutMeP3: "As a developer, I feel privileged to play — one line of code at a time.",
    skillsTitle: "Skills",
    experienceTitle: "Experience",
    contactTitle: "Let's Connect",
    downloadCV: "Download CV",
    closeModal: "Close",
    modalTitle: "See you later, alligator!",
    nameModalTitle: "String initials = \"DF\";",
    footerText: "© 2025 Daniel Farfan – Made with 💻 ❤️",
    footerThanks: "Thanks for your visit!",
    // Company names
    expSegurosAztecaTitle: "Seguros Azteca",
    expRimacTitle: "Rimac Seguros",
    expInterseguroTitle: "Interseguro",
    expBanRuralTitle: "BanRural",
    expRedLinkTitle: "RedLink",
    expMatrixTitle: "Matrix CPM Solutions",
    expBeconsultTitle: "Beconsult",
    // Countries
    mexico: "Mexico",
    peru: "Peru",
    guatemala: "Guatemala",
    argentina: "Argentina",
    colombia: "Colombia",
    venezuela: "Venezuela",
    consisInternacional: "Consis Internacional",
    // Job descriptions with full months
    expSegurosAztecaDesc: "Support Manager and Senior Developer – January 2023 to March 2024",
    expRimacDesc: "Java Senior Developer – December 2019 to December 2022",
    expInterseguroDesc: "Support Java Developer – May 2018 to November 2019",
    expBanRuralDesc: "Java Developer – March 2024 to Present",
    expRedLinkDesc: "Java Developer – January 2018 to April 2018",
    expMatrixDesc: "SpringBoot Developer – January 2017 to March 2017",
    expBeconsultDesc: "Software Developer – January 2008 to January 2017",
    dfModal: `print("After a while, crocodile!")`,
    nameModal: `String initials = "DF";
if ("DF".equalsIgnoreCase(initials)) {
    System.out.println("😄 Yes, that's me! your Developer Friend");
    while (true) {
        System.out.println("Developing Forever... 💻");
    }
}`
  },
  es: {
    about: "Acerca",
    skills: "Habilidades",
    experience: "Experiencia",
    contact: "Contacto", 
    aboutMeTitle: "Sobre Mí",
    aboutMeP1: "Soy Daniel, un hombre multifacético: hijo, padre, atleta híbrido, cristiano, montañista y fotógrafo aficionado. Pero entre mis muchos roles, es el desarrollo de software del que quiero hablar.",
    aboutMeP2: "Creo en el poder transformador de la tecnología para empoderar a las personas a lograr sus sueños más salvajes. ¡Si buscas un desarrollador de software apasionado y experimentado, no busques más!",
    aboutMeP3: "Como desarrollador, me siento privilegiado de jugar — una línea de código a la vez.",
    skillsTitle: "Habilidades",
    experienceTitle: "Experiencia",
    contactTitle: "Conectemos",
    downloadCV: "Descargar CV",
    closeModal: "Cerrar",
    modalTitle: "¡Estamos en contacto!",
    nameModalTitle: "String initials = \"DF\";",
    footerText: "© 2025 Daniel Farfan – Hecho con 💻 ❤️",
    footerThanks: "Gracias por tu visita!",
    // Company names
    expSegurosAztecaTitle: "Seguros Azteca",
    expRimacTitle: "Rimac Seguros",
    expInterseguroTitle: "Interseguro",
    expBanRuralTitle: "BanRural",
    expRedLinkTitle: "RedLink",
    expMatrixTitle: "Matrix CPM Solutions",
    expBeconsultTitle: "Beconsult",
    // Countries
    mexico: "México",
    peru: "Perú",
    guatemala: "Guatemala",
    argentina: "Argentina",
    colombia: "Colombia",
    venezuela: "Venezuela",
    consisInternacional: "Consis Internacional",
    // Job descriptions with full months in Spanish
    expSegurosAztecaDesc: "Gerente de Soporte y Desarrollador Senior – Enero 2023 a Marzo 2024",
    expRimacDesc: "Desarrollador Java Senior – Diciembre 2019 a Diciembre 2022",
    expInterseguroDesc: "Desarrollador Java de Soporte – Mayo 2018 a Noviembre 2019",
    expBanRuralDesc: "Desarrollador Java – Marzo 2024 al Presente",
    expRedLinkDesc: "Desarrollador Java – Enero 2018 a Abril 2018",
    expMatrixDesc: "Desarrollador SpringBoot – Enero 2017 a Marzo 2017",
    expBeconsultDesc: "Desarrollador de Software – Enero 2008 a Enero 2017"
  }
};

// Modal content for different languages
const modalContent = {
  en: {
    dfModal: `print("After a while, crocodile!")`,
    nameModal: `String initials = "DF";
if ("DF".equalsIgnoreCase(initials)) {
    System.out.println("😄 Yes, that's me! your Developer Friend");
    while (true) {
        System.out.println("Developing Forever... 💻");
    }
}`
  },
  es: {
    dfModal: `console.log("Cuidate Pana!");`,
    nameModal: `String initials = "DF";
if ("Daniel Farfan".equalsIgnoreCase(initials)) {
    System.out.println("😄 ¡Sí, ese soy yo!");
} else {
    System.out.println("🤔 ¿Tal vez 'Destino Final'? 😄");
}`
  }
};

// Change language function
function changeLang(lang) {
  // Update page title
  document.title = lang === 'es' ? 'Daniel Farfan | Desarrollador de Software' : 'Daniel Farfan | Software Developer';
  
  // Update CV download link
  const cvLink = document.getElementById('cv-download');
  if (cvLink) {
    cvLink.href = lang === 'es' ? 'assets/Daniel_Farfan_CV_ES.pdf' : 'assets/Daniel_Farfan_CV_EN.pdf';
    cvLink.className = lang === 'es' 
      ? 'inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
      : 'inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors';
  }
  
  // Update all elements with data-key
  const elements = document.querySelectorAll('[data-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update modal content
  const modalCode = document.getElementById('modalCode');
  const nameModalCode = document.getElementById('nameModalCode');
  
  if (modalCode) {
    modalCode.textContent = modalContent[lang].dfModal;
  }
  
  if (nameModalCode) {
    nameModalCode.textContent = modalContent[lang].nameModal;
  }
  
  // Update country names in experience section
  const countryElements = document.querySelectorAll('.text-gray-500');
  countryElements.forEach(element => {
    const text = element.textContent;
    if (text === 'Mexico' || text === 'México') {
      element.textContent = translations[lang].mexico;
    } else if (text === 'Peru' || text === 'Perú') {
      element.textContent = translations[lang].peru;
    } else if (text === 'Guatemala') {
      element.textContent = translations[lang].guatemala;
    } else if (text === 'Argentina') {
      element.textContent = translations[lang].argentina;
    } else if (text === 'Colombia') {
      element.textContent = translations[lang].colombia;
    } else if (text === 'Venezuela') {
      element.textContent = translations[lang].venezuela;
    } else if (text === 'Consis Internacional') {
      element.textContent = translations[lang].consisInternacional;
    }
  });
  
  // Update button styles
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  
  if (enBtn && esBtn) {
    enBtn.style.color = lang === 'en' ? '#2563eb' : '#374151';
    esBtn.style.color = lang === 'es' ? '#2563eb' : '#374151';
  }
  
  // Save preference
  localStorage.setItem('lang', lang);
}

// Initialize when page loads
function initLang() {
  // Get saved language or default to English
  const savedLang = localStorage.getItem('lang') || 'en';
  
  // Set initial language
  changeLang(savedLang);
  
  // Add click handlers
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  
  if (enBtn) {
    enBtn.addEventListener('click', () => changeLang('en'));
  }
  
  if (esBtn) {
    esBtn.addEventListener('click', () => changeLang('es'));
  }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
} 