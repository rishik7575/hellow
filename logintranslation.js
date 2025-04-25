const translations =
{
    "en": {
        "home": "Home",
        "loans": "Loans",
        "contact": "Contact",
        "services": "Services",
        "farmer-login": "Farmer Login",
        "email": "Email",
        "password": "Password",
        "forgot-password": "Forgot password?",
        "login-button": "Login",
        "login-options": "Or login with",
        "register-prompt": "Don't have an account?",
        "register-link": "Register here"
    },
    "hi": {
        "home": "होम",
        "loans": "ऋण",
        "contact": "संपर्क",
        "services": "सेवाएँ",
        "farmer-login": "किसान लॉगिन",
        "email": "ईमेल",
        "password": "पासवर्ड",
        "forgot-password": "पासवर्ड भूल गए?",
        "login-button": "लॉगिन",
        "login-options": "या लॉगिन करें",
        "register-prompt": "अभी तक खाता नहीं है?",
        "register-link": "यहाँ रजिस्टर करें"
    },
    "fr": {
        "home": "Accueil",
        "loans": "Prêts",
        "contact": "Contact",
        "services": "Services",
        "farmer-login": "Connexion Agriculteur",
        "email": "E-mail",
        "password": "Mot de passe",
        "forgot-password": "Mot de passe oublié?",
        "login-button": "Connexion",
        "login-options": "Ou connectez-vous avec",
        "register-prompt": "Pas encore de compte?",
        "register-link": "Inscrivez-vous ici"
    },
    "es": {
        "home": "Inicio",
        "loans": "Préstamos",
        "contact": "Contacto",
        "services": "Servicios",
        "farmer-login": "Inicio de Sesión para Agricultores",
        "email": "Correo Electrónico",
        "password": "Contraseña",
        "forgot-password": "¿Olvidaste tu contraseña?",
        "login-button": "Iniciar sesión",
        "login-options": "O inicia sesión con",
        "register-prompt": "¿No tienes una cuenta?",
        "register-link": "Regístrate aquí"
    },
    "ta": {
        "home": "முகப்பு",
        "loans": "கடன்கள்",
        "contact": "தொடர்பு",
        "services": "சேவைகள்",
        "farmer-login": "விவசாயி உள்நுழைவு",
        "email": "மின்னஞ்சல்",
        "password": "கடவுச்சொல்",
        "forgot-password": "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
        "login-button": "உள்நுழைய",
        "login-options": "அல்லது இதனுடன் உள்நுழைய",
        "register-prompt": "கணக்கு இல்லை?",
        "register-link": "இங்கே பதிவு செய்யவும்"
    },
    "te": {
        "home": "హోమ్",
        "loans": "రుణాలు",
        "contact": "సంప్రదించండి",
        "services": "సేవలు",
        "farmer-login": "రైతు లాగిన్",
        "email": "ఇమెయిల్",
        "password": "పాస్‌వర్డ్",
        "forgot-password": "పాస్‌వర్డ్ మర్చిపోయారా?",
        "login-button": "లాగిన్",
        "login-options": "లేదా దీని ద్వారా లాగిన్ చేయండి",
        "register-prompt": "ఖాతా లేదు?",
        "register-link": "ఇక్కడ నమోదు చేయండి"
    }
};
function updateTranslations(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}