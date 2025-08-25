// Enhanced Multi-Language System
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    language: "Language",
    
    // Hero Section
    heroDescription: "Passionate software developer crafting digital experiences with modern technologies. Specialized in Java, Spring, React, and cloud solutions.",
    getInTouch: "Get In Touch",
    downloadCV: "Download CV",
    
    // About Section
    aboutTitle: "About Me",
    aboutP1: "I am Daniel, a multifaceted individual: son, father, hybrid athlete, Christian, mountaineer, and amateur photographer. But among my many roles, it's software development that truly ignites my passion.",
    aboutP2: "I believe in the transformative power of technology to empower people to achieve their wildest dreams. With over 15 years of experience in software development, I've had the privilege of working with companies across Latin America, building robust solutions that make a difference.",
    aboutP3: "As a developer, I feel privileged to create — one line of code at a time. My expertise spans from backend systems with Java and Spring to modern frontend applications with React, always focusing on clean, maintainable, and scalable solutions.",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    countriesWorked: "Countries Worked",
    remoteReady: "Remote Ready",
    
    // Skills Section
    skillsTitle: "Skills & Technologies",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    devops: "DevOps",
    
    // Experience Section
    experienceTitle: "Professional Experience",
    banRuralTitle: "Java Developer - BanRural",
    banRuralDesc: "Developing and maintaining banking systems with Java and Spring Boot, focusing on secure financial transactions and regulatory compliance.",
    segurosAztecaTitle: "Support Manager & Senior Developer",
    segurosAztecaDesc: "Led development team and managed critical insurance system support, implementing microservices architecture and improving system performance by 40%.",
    rimacTitle: "Java Senior Developer",
    rimacDesc: "Developed enterprise-level insurance applications using Java, Spring Framework, and Oracle databases. Implemented REST APIs and integrated third-party services.",
    
    // Contact Section
    contactTitle: "Let's Work Together",
    contactDescription: "Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.",
    getInTouchTitle: "Get In Touch",
    location: "Location",
    
    // Modal
    helloTitle: "Hello there!",
    helloMessage: "Thanks for clicking! I'm Daniel, and I love creating digital experiences that make a difference.",
    closeModal: "Close",
    
    // Footer
    footerText: "© 2025 Daniel Farfan. Made with 💻 ❤️ and lots of ☕",
    footerThanks: "Thanks for visiting!"
  },
  
  es: {
    // Navigation
    home: "Inicio",
    about: "Acerca",
    skills: "Habilidades",
    experience: "Experiencia",
    contact: "Contacto",
    language: "Idioma",
    
    // Hero Section
    heroDescription: "Desarrollador de software apasionado creando experiencias digitales con tecnologías modernas. Especializado en Java, Spring, React y soluciones en la nube.",
    getInTouch: "Contactar",
    downloadCV: "Descargar CV",
    
    // About Section
    aboutTitle: "Sobre Mí",
    aboutP1: "Soy Daniel, un individuo multifacético: hijo, padre, atleta híbrido, cristiano, montañista y fotógrafo aficionado. Pero entre mis muchos roles, es el desarrollo de software lo que realmente enciende mi pasión.",
    aboutP2: "Creo en el poder transformador de la tecnología para empoderar a las personas a lograr sus sueños más salvajes. Con más de 15 años de experiencia en desarrollo de software, he tenido el privilegio de trabajar con empresas de toda América Latina, construyendo soluciones robustas que marcan la diferencia.",
    aboutP3: "Como desarrollador, me siento privilegiado de crear — una línea de código a la vez. Mi experiencia abarca desde sistemas backend con Java y Spring hasta aplicaciones frontend modernas con React, siempre enfocándome en soluciones limpias, mantenibles y escalables.",
    yearsExperience: "Años de Experiencia",
    projectsCompleted: "Proyectos Completados",
    countriesWorked: "Países Trabajados",
    remoteReady: "Listo para Remoto",
    
    // Skills Section
    skillsTitle: "Habilidades y Tecnologías",
    backend: "Backend",
    frontend: "Frontend",
    database: "Base de Datos",
    devops: "DevOps",
    
    // Experience Section
    experienceTitle: "Experiencia Profesional",
    banRuralTitle: "Desarrollador Java - BanRural",
    banRuralDesc: "Desarrollando y manteniendo sistemas bancarios con Java y Spring Boot, enfocándome en transacciones financieras seguras y cumplimiento regulatorio.",
    segurosAztecaTitle: "Gerente de Soporte y Desarrollador Senior",
    segurosAztecaDesc: "Lideré el equipo de desarrollo y gestioné el soporte crítico del sistema de seguros, implementando arquitectura de microservicios y mejorando el rendimiento del sistema en un 40%.",
    rimacTitle: "Desarrollador Java Senior",
    rimacDesc: "Desarrollé aplicaciones de seguros de nivel empresarial usando Java, Spring Framework y bases de datos Oracle. Implementé APIs REST e integré servicios de terceros.",
    
    // Contact Section
    contactTitle: "Trabajemos Juntos",
    contactDescription: "¿Listo para dar vida a tus ideas? Hablemos sobre cómo podemos trabajar juntos para crear algo increíble.",
    getInTouchTitle: "Ponte en Contacto",
    location: "Ubicación",
    
    // Modal
    helloTitle: "¡Hola!",
    helloMessage: "¡Gracias por hacer clic! Soy Daniel, y me encanta crear experiencias digitales que marquen la diferencia.",
    closeModal: "Cerrar",
    
    // Footer
    footerText: "© 2025 Daniel Farfan. Hecho con 💻 ❤️ y mucho ☕",
    footerThanks: "¡Gracias por visitarnos!"
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
    this.init();
  }

  init() {
    this.setupLanguageButtons();
    this.applyLanguage(this.currentLang);
  }

  setupLanguageButtons() {
    const langButtons = {
      en: [
        document.getElementById('lang-en'),
        document.getElementById('lang-en-mobile')
      ],
      es: [
        document.getElementById('lang-es'),
        document.getElementById('lang-es-mobile')
      ]
    };

    // Add click handlers for all language buttons
    Object.entries(langButtons).forEach(([lang, buttons]) => {
      buttons.forEach(button => {
        if (button) {
          button.addEventListener('click', () => this.changeLanguage(lang));
        }
      });
    });
  }

  changeLanguage(lang) {
    if (!translations[lang]) return;

    this.currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    this.applyLanguage(lang);
    this.updateUI(lang);
  }

  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[lang][key]) {
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translations[lang][key];
        } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Update document attributes
    document.documentElement.lang = lang;
    this.updatePageTitle(lang);
    this.updateCVLink(lang);
  }

  updatePageTitle(lang) {
    const titles = {
      en: 'Daniel Farfan | Software Developer',
      es: 'Daniel Farfan | Desarrollador de Software'
    };
    document.title = titles[lang];
  }

  updateCVLink(lang) {
    const cvLink = document.getElementById('cv-download');
    if (cvLink) {
      const cvFiles = {
        en: 'assets/Daniel_Farfan_CV_EN.pdf',
        es: 'assets/Daniel_Farfan_CV_ES.pdf'
      };
      cvLink.href = cvFiles[lang];
    }
  }

  updateUI(lang) {
    // Update language button states
    const allLangButtons = [
      document.getElementById('lang-en'),
      document.getElementById('lang-es'),
      document.getElementById('lang-en-mobile'),
      document.getElementById('lang-es-mobile')
    ];

    allLangButtons.forEach(button => {
      if (button) {
        button.classList.remove('text-primary-600', 'dark:text-primary-400', 'bg-primary-100', 'dark:bg-primary-900/30');
        
        const buttonLang = button.id.includes('en') ? 'en' : 'es';
        if (buttonLang === lang) {
          button.classList.add('text-primary-600', 'dark:text-primary-400', 'bg-primary-100', 'dark:bg-primary-900/30');
        }
      }
    });

    // Update meta tags for SEO
    this.updateMetaTags(lang);
  }

  updateMetaTags(lang) {
    const metaDescriptions = {
      en: 'Daniel Farfan - Experienced Software Developer specializing in Java, Spring, React, and modern web technologies. Available for remote work worldwide.',
      es: 'Daniel Farfan - Desarrollador de Software experimentado especializado en Java, Spring, React y tecnologías web modernas. Disponible para trabajo remoto mundial.'
    };

    const metaKeywords = {
      en: 'Daniel Farfan, Software Developer, Java Developer, Spring Boot, React, Full Stack Developer, Remote Developer',
      es: 'Daniel Farfan, Desarrollador de Software, Desarrollador Java, Spring Boot, React, Desarrollador Full Stack, Desarrollador Remoto'
    };

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = metaDescriptions[lang];
    }

    // Update meta keywords
    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.content = metaKeywords[lang];
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');

    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = metaDescriptions[lang];
    if (twitterTitle) twitterTitle.content = document.title;
    if (twitterDescription) twitterDescription.content = metaDescriptions[lang];
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  // Method to get translation for a specific key
  getTranslation(key, lang = this.currentLang) {
    return translations[lang]?.[key] || key;
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});

// Export for external use
window.LanguageManager = LanguageManager;
window.translations = translations;