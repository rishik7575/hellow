// i18n-init.js
i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
      // Detect language from localStorage first, then navigator
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng'
    },
    resources: {
      en: {
        translation: {
          "title": "AgriLand - Comprehensive Agricultural Solutions",
          "nav": {
            "home": "Home",
            "features": "Features",
            "loans": "Loans",
            "services": "Services",
            "contact": "Contact"
          },
          "hero": {
            "heading": "Empowering Farmers, Transforming Agriculture",
            "subheading": "Comprehensive platform offering end-to-end agricultural solutions, from land testing to market selling",
            "farmerLogin": "Farmer Login",
            "executivePortal": "Executive Portal"
          },
          "features": {
            "title": "Our Comprehensive Solutions",
            "landTesting": {
              "title": "Land Testing",
              "description": "Advanced AI-driven soil analysis and crop recommendations"
            },
            "loanServices": {
              "title": "Loan Services",
              "description": "Simplified access to government and private agricultural loans"
            }
          },
          "footer": {
            "heading": "AgriLand - Your Agricultural Partner",
            "subheading": "Innovating agriculture through technology and sustainable solutions",
            "privacyPolicy": "Privacy Policy",
            "termsOfService": "Terms of Service",
            "support": "Support"
          }
        }
      },
      es: {
        translation: {
          "title": "AgriLand - Soluciones Agrícolas Integrales",
          "nav": {
            "home": "Inicio",
            "features": "Características",
            "loans": "Préstamos",
            "services": "Servicios",
            "contact": "Contacto"
          },
          "hero": {
            "heading": "Empoderando a los Agricultores, Transformando la Agricultura",
            "subheading": "Plataforma integral que ofrece soluciones agrícolas completas, desde el análisis de la tierra hasta la venta en el mercado",
            "farmerLogin": "Acceso Agricultor",
            "executivePortal": "Portal Ejecutivo"
          },
          "features": {
            "title": "Nuestras Soluciones Integrales",
            "landTesting": {
              "title": "Análisis de Suelo",
              "description": "Análisis de suelo avanzado con IA y recomendaciones de cultivos"
            },
            "loanServices": {
              "title": "Servicios de Préstamos",
              "description": "Acceso simplificado a préstamos agrícolas gubernamentales y privados"
            }
          },
          "footer": {
            "heading": "AgriLand - Su Socio Agrícola",
            "subheading": "Innovando la agricultura a través de tecnología y soluciones sostenibles",
            "privacyPolicy": "Política de Privacidad",
            "termsOfService": "Términos del Servicio",
            "support": "Soporte"
          }
        }
      },
      te: {
        translation: {
          "title": "AgriLand - సంపూర్ణ వ్యవసాయ పరిష్కారాలు",
          "nav": {
            "home": "హోమ్",
            "features": "లక్షణాలు",
            "loans": "ఋణాలు",
            "services": "సేవలు",
            "contact": "సంప్రదించండి"
          },
          "hero": {
            "heading": "రైతులను శక్తివంతం చేస్తూ, వ్యవసాయాన్ని మార్చడం",
            "subheading": "భూమి పరీక్ష నుండి మార్కెట్ అమ్మకాల వరకు, అన్ని వ్యవసాయ పరిష్కారాలను అందించే సమగ్ర వేదిక",
            "farmerLogin": "రైతు లాగిన్",
            "executivePortal": "ఎగ్జిక్యూటివ్ పోర్టల్"
          },
          "features": {
            "title": "మా సమగ్ర పరిష్కారాలు",
            "landTesting": {
              "title": "భూమి పరీక్ష",
              "description": "ఉన్నత AI ఆధారిత నేల విశ్లేషణ మరియు పంట సిఫార్సులు"
            },
            "loanServices": {
              "title": "ఋణ సేవలు",
              "description": "రాష్ట్ర మరియు ప్రైవేట్ వ్యవసాయ రుణాలకు సులభమైన ప్రాప్యత"
            }
          },
          "footer": {
            "heading": "AgriLand - మీ వ్యవసాయ భాగస్వామి",
            "subheading": "సాంకేతికత మరియు సుస్థిర పరిష్కారాల ద్వారా వ్యవసాయంలో నూతనత",
            "privacyPolicy": "గోప్యతా విధానం",
            "termsOfService": "సేవా నిబంధనలు",
            "support": "మద్దతు"
          }
        }
      }
    }
  },
  function (err, t) {
    jqueryI18next.init(i18next, $, { useOptionsAttr: true });
    $('body').localize();
  }
);

// Language switcher event
$('#languageSwitcher').on('change', function () {
  const newLang = $(this).val();
  // Save the chosen language to localStorage
  localStorage.setItem('i18nextLng', newLang);
  i18next.changeLanguage(newLang, function (err, t) {
    $('body').localize();
  });
});
