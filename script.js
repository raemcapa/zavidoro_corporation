document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
        // Simple animation for the lines
        const lines = hamburger.children;
        if(navLinks.classList.contains('active')) {
            lines[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            lines[1].style.opacity = "0";
            lines[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            lines[0].style.transform = "none";
            lines[1].style.opacity = "1";
            lines[2].style.transform = "none";
        }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            const lines = hamburger.children;
            lines[0].style.transform = "none";
            lines[1].style.opacity = "1";
            lines[2].style.transform = "none";
        });
    });

    // Reveal on Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Items to animate
    const animateItems = document.querySelectorAll('.store-card, .value-item, .brand-card');
    animateItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.6s ease-out";
        observer.observe(item);
    });

    // Traducciones
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Nosotros",
            "nav-stores": "Tiendas Nike",
            "nav-infra": "Infraestructura",
            "nav-dir": "Directorio",
            "hero-title": "Liderando el Futuro del Retail Deportivo",
            "hero-desc": "Desde 1993 impulsando el mercado nacional y representando la máxima excelencia de la marca Nike.",
            "hero-btn": "Conoce Nuestra Historia",
            "hist-badge": "Nuestra Historia",
            "hist-title": "Más de 30 años de evolución",
            "hist-p1": "En <strong>septiembre de 1993</strong>, se nos presentó la oportunidad de convertirnos en distribuidores oficiales de <strong>Nike</strong> en Paraguay. Establecimos nuestra primera oficina en Asunción (Gral. Santos y España) con un equipo colaborativo de apenas 5 personas.",
            "hist-p2": "Hoy, somos más de <strong>900 colaboradores</strong> comprometidos con llevar la mejor experiencia retail a nuestros clientes. Enfoque que nos ha permitido consolidar la presencia de Nike en todo el territorio nacional, manteniendo siempre los estándares globales dictados por la marca deportiva más grande del mundo.",
            "phil-mission": "Nuestra Misión",
            "phil-mission-p": "\"Brindar Inspiración a todas las personas que nos rodean.\"",
            "phil-vision": "Nuestra Visión",
            "phil-vision-p": "\"Ser líderes en lo que sea que hagamos, empoderando a nuestros colaboradores, fascinando a nuestros clientes, fidelizando a nuestro entorno a través de ellos.\"",
            "val-title": "Nuestros <span>Valores</span>",
            "val-subtitle": "¡Vivilos cada día!",
            "val-1": "Responsabilidad",
            "val-2": "Innovación",
            "val-3": "Respeto",
            "val-4": "Confianza",
            "val-5": "Prudencia",
            "val-6": "Seriedad",
            "val-7": "Comunicación",
            "val-8": "Calidad",
            "stores-title": "Nuestras <span>Tiendas Nike</span>",
            "stores-desc": "Presencia nacional con ubicaciones estratégicas bajo los últimos conceptos globales de la marca.",
            "infra-title1": "Logística",
            "infra-desc1": "Capacidad logística de primer nivel orientada a abastecer de manera eficiente tanto a todas nuestras sucursales de Nike como a todos nuestros clientes mayoristas en el país.",
            "infra-badge2": "Operaciones",
            "infra-title2": "Nuestras Oficinas",
            "infra-desc2": "Centros estratégicos desde donde nuestro equipo directivo coordina el futuro de la marca.",
            "infra-off1": "Oficina Central Asunción",
            "infra-off2": "Oficina CDE",
            "dir-title": "Los que <span>Dirigen</span>",
            "dir-desc": "Nuestro Directorio Ejecutivo guiando el rumbo de Zavidoro Corporation.",
            "dir-pres": "Presidente",
            "dir-fin": "Directora Administrativa y Financiera",
            "dir-sales": "Director de Tecnología e Innovación",
            "dir-stores": "Director Comercial",
            "store-city1": "Asunción:",
            "store-dist": "Distrito:",
            "store-sol": "Sol:",
            "store-mar": "Mariscal:",
            "foot-desc": "Distribuidores Oficiales de Nike en Paraguay.",
            "foot-h1": "Empresa",
            "foot-l1": "Historia",
            "foot-l2": "Tiendas Nike",
            "foot-l3": "Directorio",
            "foot-h2": "Contactos Principales",
            "foot-l4": "Oficina Central Asunción",
            "foot-l5": "Oficina CDE",
            "foot-h3": "Llámanos",
            "foot-hours": "<i class=\"far fa-clock\" style=\"margin-right: 8px;\"></i> Lunes a Viernes de 08:00 a 18:00",
            "foot-copy": "&copy; 2024 Zavidoro Corporation. Todos los derechos reservados.",
            "legal-title": "DATOS LEGALES",
            "legal-name": "Razón Social",
            "legal-address": "Dirección",
            "legal-email": "Correo",
            "legal-phone": "Teléfono"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-stores": "Nike Stores",
            "nav-infra": "Infrastructure",
            "nav-dir": "Directory",
            "hero-title": "Leading the Future of Sports Retail",
            "hero-desc": "Since 1993 driving the national market and representing the ultimate excellence of the Nike brand.",
            "hero-btn": "Discover Our History",
            "hist-badge": "Our History",
            "hist-title": "Over 30 years of evolution",
            "hist-p1": "In <strong>September 1993</strong>, we were presented with the opportunity to become official distributors of <strong>Nike</strong> in Paraguay. We established our first office in Asunción (Gral. Santos and España) with a collaborative team of just 5 people.",
            "hist-p2": "Today, we are over <strong>900 collaborators</strong> committed to bringing the best retail experience to our customers. A focus that has allowed us to consolidate Nike's presence throughout the national territory, always maintaining the global standards dictated by the world's largest sports brand.",
            "phil-mission": "Our Mission",
            "phil-mission-p": "\"To Bring Inspiration to everyone around us.\"",
            "phil-vision": "Our Vision",
            "phil-vision-p": "\"To be leaders in whatever we do, empowering our collaborators, fascinating our customers, building loyalty in our environment through them.\"",
            "val-title": "Our <span>Values</span>",
            "val-subtitle": "Live them every day!",
            "val-1": "Responsibility",
            "val-2": "Innovation",
            "val-3": "Respect",
            "val-4": "Trust",
            "val-5": "Prudence",
            "val-6": "Seriousness",
            "val-7": "Communication",
            "val-8": "Quality",
            "stores-title": "Our <span>Nike Stores</span>",
            "stores-desc": "National presence with strategic locations under the latest global brand concepts.",
            "infra-title1": "Logistics",
            "infra-desc1": "Top-level logistics capacity aimed at efficiently supplying both all our Nike branches and all our wholesale clients in the country.",
            "infra-badge2": "Operations",
            "infra-title2": "Our Offices",
            "infra-desc2": "Strategic centers from which our executive team coordinates the future of the brand.",
            "infra-off1": "Asunción Head Office",
            "infra-off2": "CDE Office",
            "dir-title": "Those Who <span>Lead</span>",
            "dir-desc": "Our Executive Board guiding the course of Zavidoro Corporation.",
            "dir-pres": "President",
            "dir-fin": "Chief Administrative and Financial Officer",
            "dir-sales": "Chief Technology and Innovation Officer",
            "dir-stores": "Chief Commercial Officer",
            "store-city1": "Asuncion:",
            "store-dist": "District:",
            "store-sol": "Sol:",
            "store-mar": "Mariscal:",
            "foot-desc": "Official Nike Distributors in Paraguay.",
            "foot-h1": "Company",
            "foot-l1": "History",
            "foot-l2": "Nike Stores",
            "foot-l3": "Directory",
            "foot-h2": "Main Contacts",
            "foot-l4": "Asunción Head Office",
            "foot-l5": "CDE Office",
            "foot-h3": "Call Us",
            "foot-hours": "<i class=\"far fa-clock\" style=\"margin-right: 8px;\"></i> Monday to Friday from 08:00 to 18:00",
            "foot-copy": "&copy; 2024 Zavidoro Corporation. All rights reserved.",
            "legal-title": "LEGAL DATA",
            "legal-name": "Legal Name",
            "legal-address": "Address",
            "legal-email": "Email",
            "legal-phone": "Phone"
        }
    };

    const setLanguage = (lang) => {
        localStorage.setItem('preferredLang', lang);
        
        // Update Buttons
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };

    // Event Listeners for Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Initialize Language from localStorage or default
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // Modal Logic
    const setupModal = (triggerId, modalId) => {
        const trigger = document.getElementById(triggerId);
        const modal = document.getElementById(modalId);
        if (trigger && modal) {
            trigger.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    };

    setupModal('office-asu', 'modal-legal-asu');
    setupModal('office-cde', 'modal-legal-cde');
    setupModal('foot-office-asu', 'modal-legal-asu');
    setupModal('foot-office-cde', 'modal-legal-cde');

    // Close buttons logic
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close on click outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

});
