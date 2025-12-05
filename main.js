// Translation System
const translations = {
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            coaching: "Coaching",
            contact: "Contact"
        },
        hero: {
            title: "Hello, I'm <span class=\"highlight\">Daan Simpelaar</span>",
            subtitle: "Web Developer, Designer, Student and Personal Fitness Trainer",
            description: "I create modern and user-friendly websites that make an impact.",
            button1: "Take a look at my work",
            button2: "Get in touch"
        },
        about: {
            title: "About Me",
            text1: "I'm a student web and app developer with a keen eye for detail and a love for modern technologies, with experience in HTML, CSS, JavaScript, other languages and various frameworks. I create websites that are functional, user-friendly, and built using modern best practices and accessibility guidelines. I am critical of myself, which makes me accurate in my work. Aside from web and app development, I also spend a lot of time on fitness and health, aspiring to help people with coaching and making my passion a profession. Offering years of experience in personal coaching.",
            text2: "As a student I'm always learning and improving my skills, and I believe I have much to offer as a web/app developer."
        },
        skills: {
            title: "Skills",
            frontend: "Frontend",
            backend: "Backend"
        },
        projects: {
            title: "Projects",
            project1: {
                title: "Dagplanning App",
                description: "A simple desktop app that helps you plan your day, with a calendar and a list of tasks."
            },
            project2: {
                title: "Placeholder",
                description: "Placeholder"
            },
            project3: {
                title: "Placeholder",
                description: "Placeholder"
            },
            liveDemo: "Live Demo",
            code: "Code"
        },
        contact: {
            title: "Contact",
            heading: "Let's work together!",
            description: "Are you interested in a collaboration or have a question? Feel free to contact me.",
            location: "Waddinxveen, Netherlands",
            form: {
                name: "Your name",
                email: "Your email",
                subject: "Subject",
                message: "Your message",
                submit: "Send message"
            }
        },
        footer: {
            rights: "All rights reserved."
        },
        notifications: {
            fillAllFields: "Please fill in all fields",
            invalidEmail: "Please enter a valid email address",
            sending: "Sending message...",
            success: "Message sent successfully!",
            error: "Failed to send message. Please try again."
        },
        coaching: {
            nav: {
                logo: "FITNESS COACHING",
                portfolio: "Portfolio",
                goals: "Goals",
                approach: "Approach",
                contact: "Contact"
            },
            hero: {
                title: "TRANSFORM YOUR <span class=\"highlight\">BODY</span>",
                subtitle: "Expert guidance for muscle building, strength gains, and weight management",
                description: "Based on years of experience and deep knowledge in fitness, I help you achieve your body transformation goals through proven training methods and personalized nutrition strategies.",
                button: "Start Your Transformation",
                stat1: "Hours Trained",
                stat2: "Clients Helped",
                stat3: "Years Experience"
            },
            goals: {
                title: "What We Focus On",
                muscle: {
                    title: "Muscle Building",
                    description: "Build lean muscle mass with scientifically-proven hypertrophy training programs tailored to your body type and goals.",
                    item1: "Progressive overload training",
                    item2: "Optimal rep ranges for growth",
                    item3: "Recovery optimization"
                },
                strength: {
                    title: "Strength Gains",
                    description: "Increase your overall strength with compound movements and power training that builds functional strength.",
                    item1: "Compound exercise focus",
                    item2: "Progressive strength building",
                    item3: "Form and technique mastery"
                },
                weight: {
                    title: "Weight Management",
                    description: "Achieve your ideal weight through balanced nutrition and effective training that burns fat while preserving muscle.",
                    item1: "Calorie management",
                    item2: "Metabolic optimization",
                    item3: "Sustainable lifestyle changes"
                }
            },
            approach: {
                title: "My Approach",
                heading: "Knowledge-Based Coaching",
                description: "While I don't have formal certifications, I bring years of practical experience and deep knowledge in fitness, nutrition, and body transformation. My approach is based on proven scientific principles and real-world results.",
                point1: {
                    title: "Scientific Foundation",
                    description: "All training methods are based on exercise science and proven research"
                },
                point2: {
                    title: "Results-Driven",
                    description: "Focus on measurable progress and continuous improvement"
                },
                point3: {
                    title: "Personalized Care",
                    description: "Every program is tailored to your specific goals and lifestyle"
                }
            },
            contact: {
                title: "Ready to Transform?",
                heading: "Let's Build Your Dream Body",
                description: "Whether you want to build muscle, gain strength, or manage your weight, I'll create a personalized program that fits your lifestyle and gets you results.",
                location: "Utrecht, Netherlands",
                form: {
                    name: "Your Name",
                    email: "Your Email",
                    phone: "Your Phone",
                    goalDefault: "Select Your Goal",
                    goalMuscle: "Build Muscle",
                    goalStrength: "Gain Strength",
                    goalWeight: "Weight Management",
                    goalConsultation: "Free Consultation",
                    message: "Tell me about your fitness goals and current situation...",
                    submit: "Send Message"
                }
            },
            footer: {
                text: "Transform your body, transform your life."
            }
        }
    },
    nl: {
        nav: {
            about: "Over Mij",
            skills: "Vaardigheden",
            projects: "Projecten",
            coaching: "Coaching",
            contact: "Contact"
        },
        hero: {
            title: "Hallo, ik ben <span class=\"highlight\">Daan Simpelaar</span>",
            subtitle: "Web Developer, Designer en Student en Persoonlijke Fitness Trainer",
            description: "Ik maak moderne en gebruiksvriendelijke websites die impact maken.",
            button1: "Bekijk mijn werk",
            button2: "Neem contact op"
        },
        about: {
            title: "Over Mij",
            text1: "Ik ben een student web- en app-ontwikkelaar met een scherp oog voor detail en een liefde voor moderne technologieën, met ervaring in HTML, CSS, JavaScript, andere talen en verschillende frameworks. Ik maak websites die functioneel, gebruiksvriendelijk zijn en gebouwd met moderne best practices en toegankelijkheidsrichtlijnen. Ik ben kritisch op mezelf, wat me accuraat maakt in mijn werk. Naast web- en app-ontwikkeling besteed ik ook veel tijd aan fitness en gezondheid, met de ambitie om mensen te helpen met coaching en mijn passie tot een beroep te maken. Met jarenlange ervaring in persoonlijke coaching.",
            text2: "Als student leer en verbeter ik altijd mijn vaardigheden, en ik geloof dat ik veel te bieden heb als web/app-ontwikkelaar en als fitness coach."
        },
        skills: {
            title: "Vaardigheden",
            frontend: "Frontend",
            backend: "Backend"
        },
        projects: {
            title: "Projecten",
            project1: {
                title: "Dagplanning App",
                description: "Een simpele desktop app die je helpt je dag te plannen, met een kalender en een lijst van taken."
            },
            project2: {
                title: "Placeholder",
                description: "Placeholder"
            },
            project3: {
                title: "Placeholder",
                description: "Placeholder"
            },
            liveDemo: "Live Demo",
            code: "Code"
        },
        contact: {
            title: "Contact",
            heading: "Laten we samenwerken!",
            description: "Ben je geïnteresseerd in een samenwerking of heb je een vraag? Neem gerust contact met me op.",
            location: "Waddinxveen, Nederland",
            form: {
                name: "Uw naam",
                email: "Uw e-mail",
                subject: "Onderwerp",
                message: "Uw bericht",
                submit: "Verstuur bericht"
            }
        },
        footer: {
            rights: "Alle rechten voorbehouden."
        },
        notifications: {
            fillAllFields: "Vul alle velden in",
            invalidEmail: "Voer een geldig e-mailadres in",
            sending: "Bericht verzenden...",
            success: "Bericht succesvol verzonden!",
            error: "Verzenden mislukt. Probeer het opnieuw."
        },
        coaching: {
            nav: {
                logo: "FITNESS COACHING",
                portfolio: "Portfolio",
                goals: "Doelen",
                approach: "Aanpak",
                contact: "Contact"
            },
            hero: {
                title: "TRANSFORMEER JE <span class=\"highlight\">LICHAAM</span>",
                subtitle: "Expert begeleiding voor spieropbouw, krachtwinst en gewichtsbeheer",
                description: "Gebaseerd op jarenlange ervaring en diepgaande kennis in fitness, help ik je je lichaamstransformatiedoelen te bereiken door bewezen trainingsmethoden en gepersonaliseerde voedingsstrategieën.",
                button: "Start Je Transformatie",
                stat1: "Uren Getraind",
                stat2: "Klanten Geholpen",
                stat3: "Jaar Ervaring"
            },
            goals: {
                title: "Waar We Op Focussen",
                muscle: {
                    title: "Spieropbouw",
                    description: "Bouw magere spiermassa op met wetenschappelijk bewezen hypertrofie trainingsprogramma's afgestemd op jouw lichaamstype en doelen.",
                    item1: "Progressieve overload training",
                    item2: "Optimale rep ranges voor groei",
                    item3: "Herstel optimalisatie"
                },
                strength: {
                    title: "Krachtwinst",
                    description: "Verhoog je algehele kracht met samengestelde bewegingen en krachttraining die functionele kracht opbouwt.",
                    item1: "Focus op samengestelde oefeningen",
                    item2: "Progressieve krachtopbouw",
                    item3: "Vorm- en techniekmastery"
                },
                weight: {
                    title: "Gewichtsbeheer",
                    description: "Bereik je ideale gewicht door uitgebalanceerde voeding en effectieve training die vet verbrandt terwijl spieren behouden blijven.",
                    item1: "Caloriebeheer",
                    item2: "Metabole optimalisatie",
                    item3: "Duurzame levensstijlveranderingen"
                }
            },
            approach: {
                title: "Mijn Aanpak",
                heading: "Kennisgebaseerde Coaching",
                description: "Hoewel ik geen formele certificeringen heb, breng ik jarenlange praktische ervaring en diepgaande kennis in fitness, voeding en lichaamstransformatie mee. Mijn aanpak is gebaseerd op bewezen wetenschappelijke principes en resultaten uit de praktijk.",
                point1: {
                    title: "Wetenschappelijke Basis",
                    description: "Alle trainingsmethoden zijn gebaseerd op bewegingswetenschap en bewezen onderzoek"
                },
                point2: {
                    title: "Resultaatgericht",
                    description: "Focus op meetbare vooruitgang en continue verbetering"
                },
                point3: {
                    title: "Gepersonaliseerde Zorg",
                    description: "Elk programma is afgestemd op jouw specifieke doelen en levensstijl"
                }
            },
            contact: {
                title: "Klaar om te Transformeren?",
                heading: "Laten We Je Droomlichaam Bouwen",
                description: "Of je nu spieren wilt opbouwen, kracht wilt winnen of je gewicht wilt beheren, ik maak een gepersonaliseerd programma dat bij jouw levensstijl past en je resultaten geeft.",
                location: "Utrecht, Nederland",
                form: {
                    name: "Uw Naam",
                    email: "Uw E-mail",
                    phone: "Uw Telefoon",
                    goalDefault: "Selecteer Uw Doel",
                    goalMuscle: "Spieropbouw",
                    goalStrength: "Krachtwinst",
                    goalWeight: "Gewichtsbeheer",
                    goalConsultation: "Gratis Consultatie",
                    message: "Vertel me over je fitnessdoelen en huidige situatie...",
                    submit: "Verstuur Bericht"
                }
            },
            footer: {
                text: "Transformeer je lichaam, transformeer je leven."
            }
        }
    }
};

// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Translate all elements
    translatePage();
}

function getNestedTranslation(key, translations) {
    return key.split('.').reduce((obj, k) => obj && obj[k], translations);
}

function translatePage() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key, translations[currentLanguage]);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For form inputs, we'll handle placeholders separately
                return;
            } else if (element.tagName === 'OPTION') {
                // For select options, update the text content (not innerHTML to avoid issues)
                element.textContent = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(key, translations[currentLanguage]);
        
        if (translation) {
            element.placeholder = translation;
        }
    });
}

function initLanguageSwitcher() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLanguageSwitcher();
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initSkillBars();
    initNavbarScroll();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .stat, .skill-category, .contact-info, .contact-form');
    animateElements.forEach(el => observer.observe(el));
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Initialize EmailJS
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                const msg = getNestedTranslation('notifications.fillAllFields', translations[currentLanguage]);
                showNotification(msg, 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                const msg = getNestedTranslation('notifications.invalidEmail', translations[currentLanguage]);
                showNotification(msg, 'error');
                return;
            }
            
            // Show sending notification
            const sendingMsg = getNestedTranslation('notifications.sending', translations[currentLanguage]);
            showNotification(sendingMsg, 'info');
            
            // Prepare email parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'DaanSimpelaarWM@gmail.com' // Your email address
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    const successMsg = getNestedTranslation('notifications.success', translations[currentLanguage]);
                    showNotification(successMsg, 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    const errorMsg = getNestedTranslation('notifications.error', translations[currentLanguage]);
                    showNotification(errorMsg, 'error');
                });
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    console.log('Found skill bars:', skillBars.length);
    
    // Set all skill bars to 0% width initially
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        console.log('Set bar to 0% width');
    });
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                console.log('Animating bar to:', targetWidth);
                
                // Add staggered delay for each skill bar
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                    console.log('Set bar width to:', targetWidth);
                }, index * 400); // 400ms delay between each skill bar
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Typing effect for hero title (optional enhancement)
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    const highlightSpan = heroTitle.querySelector('.highlight');
    
    if (highlightSpan) {
        const highlightText = highlightSpan.textContent;
        highlightSpan.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < highlightText.length) {
                highlightSpan.textContent += highlightText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect when page loads
        setTimeout(typeWriter, 1000);
    }
}

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize typing effect
initTypingEffect();

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation CSS
const rippleStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);
