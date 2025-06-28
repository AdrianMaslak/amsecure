const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.cyber': 'Cyber Security',
        'nav.physical': 'Physical Security',
        'nav.consulting': 'Consulting',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Your Trusted Security Partner',
        'hero.subtitle': 'Comprehensive security solutions tailored to protect your business in an increasingly complex world.',
        'hero.button': 'Our Services',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Expert security solutions for your business needs',
        'cyber.title': 'Cyber Security',
        'cyber.desc': 'Protect your digital assets with our comprehensive cyber security solutions, including threat detection and prevention.',
        'cyber.button': 'Learn More',
        'physical.title': 'Physical Security',
        'physical.desc': 'Ensure the safety of your premises and personnel with our advanced physical security solutions.',
        'physical.button': 'Learn More',
        'consulting.title': 'Security Consulting',
        'consulting.desc': 'Get expert advice and strategic planning to enhance your overall security posture.',
        'consulting.button': 'Learn More',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Contact us for a free consultation',
        'contact.email.title': 'Email Us',
        'contact.email': 'info@amsecure.com',
        'contact.email.subtitle': 'We\'ll respond within 24 hours',
        'contact.phone.title': 'Call Us',
        'contact.phone': '+421 900 123 456',
        'contact.phone.subtitle': 'Mon-Fri, 8:00-18:00',
        'contact.address.title': 'Visit Us',
        'contact.address.line1': 'Security Street 123',
        'contact.address.line2': 'Bratislava, 811 01',
        'contact.address.subtitle': 'By appointment only',
        'contact.form.title': 'Send us a message',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.service': 'Service of Interest',
        'form.select': 'Select a service',
        'form.cyber': 'Cyber Security',
        'form.physical': 'Physical Security',
        'form.consulting': 'Consulting',
        'form.other': 'Other',
        'form.message': 'Message',
        'form.submit': 'Send Message',
        
        // Footer
        'footer.copyright': ' 2023 AMSecure. All rights reserved.'
    },
    sk: {
        // Navigation
        'nav.home': 'Domov',
        'nav.cyber': 'Kybernetická Bezpečnosť',
        'nav.physical': 'Fyzická Bezpečnosť',
        'nav.consulting': 'Konzultácie',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.title': 'Vaše Důvěryhodné Bezpečnostní Řešení',
        'hero.subtitle': 'Komplexní bezpečnostní řešení přizpůsobená ochraně vašeho podniku v stále složitějším světě.',
        'hero.button': 'Naše služby',
        
        // Services Section
        'services.title': 'Naše služby',
        'services.subtitle': 'Odborná bezpečnostní řešení pro potřeby vašeho podniku',
        'cyber.title': 'Kybernetická bezpečnost',
        'cyber.desc': 'Chcete-li chránit své digitální aktiva, nabízíme komplexní kybernetická bezpečnostní řešení, včetně detekce a prevence hrozeb.',
        'cyber.button': 'Více informací',
        'physical.title': 'Fyzická bezpečnost',
        'physical.desc': 'Zajišťujeme bezpečnost vašich objektů a zaměstnanců pomocí pokročilých fyzických bezpečnostních řešení.',
        'physical.button': 'Více informací',
        'consulting.title': 'Bezpečnostní konzultace',
        'consulting.desc': 'Získejte odborné poradenství a strategické plánování pro posílení vaší celkové bezpečnostní postavení.',
        'consulting.button': 'Více informací',
        
        // Contact Section
        'contact.title': 'Kontaktujte nás',
        'contact.subtitle': 'Kontaktujte nás pro bezplatnou konzultaci',
        'contact.email.title': 'Napište nám',
        'contact.email': 'info@amsecure.com',
        'contact.email.subtitle': 'Odpovíme v rámci 24 hodin',
        'contact.phone.title': 'Zavolejte nám',
        'contact.phone': '+421 900 123 456',
        'contact.phone.subtitle': 'Po-Fr, 8:00-18:00',
        'contact.address.title': 'Navštivte nás',
        'contact.address.line1': 'Bezpečnostní ulice 123',
        'contact.address.line2': 'Bratislava, 811 01',
        'contact.address.subtitle': 'Pouze předem domluvené návštěvy',
        'contact.form.title': 'Pošlete nám zprávu',
        'form.name': 'Jméno',
        'form.email': 'Email',
        'form.service': 'Typ služby',
        'form.select': 'Vyberte službu',
        'form.cyber': 'Kybernetická bezpečnost',
        'form.physical': 'Fyzická bezpečnost',
        'form.consulting': 'Konzultace',
        'form.other': 'Ostatní',
        'form.message': 'Zpráva',
    }
};

// Add data-translate attributes to elements that need translation
function addTranslateAttributes() {
    // Navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        const text = link.textContent.trim();
        const key = Object.keys(translations.en).find(k => translations.en[k] === text);
        if (key) {
            link.setAttribute('data-translate', key);
        }
    });

    // Hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .btn');
    
    if (heroTitle) heroTitle.setAttribute('data-translate', 'hero.title');
    if (heroSubtitle) heroSubtitle.setAttribute('data-translate', 'hero.subtitle');
    if (heroButton) heroButton.setAttribute('data-translate', 'hero.button');

    // Services section
    const servicesTitle = document.querySelector('.section-title h2');
    const servicesSubtitle = document.querySelector('.section-title p');
    
    if (servicesTitle) servicesTitle.setAttribute('data-translate', 'services.title');
    if (servicesSubtitle) servicesSubtitle.setAttribute('data-translate', 'services.subtitle');
    
    document.querySelectorAll('.service-card').forEach(card => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const button = card.querySelector('.btn');
        
        if (title) {
            const titleKey = Object.keys(translations.en).find(k => translations.en[k] === title.textContent.trim());
            if (titleKey) title.setAttribute('data-translate', titleKey);
        }
        if (desc) desc.setAttribute('data-translate', 'services.desc');
        if (button) button.setAttribute('data-translate', 'services.button');
    });

    // Contact section
    const contactTitle = document.querySelector('.contact .section-title h2');
    const contactSubtitle = document.querySelector('.contact .section-title p');
    
    if (contactTitle) contactTitle.setAttribute('data-translate', 'contact.title');
    if (contactSubtitle) contactSubtitle.setAttribute('data-translate', 'contact.subtitle');

    // Form elements
    document.querySelector('.form-container h3').setAttribute('data-translate', 'contact.form.title');
    
    document.querySelectorAll('.form-group').forEach(group => {
        const label = group.querySelector('label').textContent.trim();
        const select = group.querySelector('select');
        const option = select?.querySelector('option:not([value=""])');
        
        const labelKey = Object.keys(translations.en).find(k => translations.en[k] === label);
        const selectKey = Object.keys(translations.en).find(k => translations.en[k] === option?.textContent);
        
        if (labelKey) group.querySelector('label').setAttribute('data-translate', labelKey);
        if (selectKey) option.setAttribute('data-translate', selectKey);
    });
}

// Translate the page
function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update form select options
    document.querySelectorAll('select.form-control option').forEach(option => {
        const key = option.getAttribute('data-translate');
        if (key && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
}

// Update language switcher
function updateLanguageSwitcher() {
    const languageSwitchers = document.querySelectorAll('.language-switcher a');
    languageSwitchers.forEach(switcher => {
        if (switcher.dataset.lang === currentLang) {
            switcher.classList.add('active');
        } else {
            switcher.classList.remove('active');
        }
    });
}

// Handle language switch
function handleLanguageSwitch(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguageSwitcher();
    translatePage(lang);
}

// Set up language switcher
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    updateLanguageSwitcher();
    
    // Add click handlers for language switcher
    const languageSwitchers = document.querySelectorAll('.language-switcher a');
    languageSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            handleLanguageSwitch(lang);
        });
    });
});
