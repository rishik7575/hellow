function updateAllTranslations(lang) {
    const mergedTranslations = {
        ...translations[lang],
        ...login[lang]
    };

    const allElements = document.querySelectorAll('[data-key], [data-login-key]');
    allElements.forEach(element => {
        const key = element.getAttribute('data-key') || element.getAttribute('data-login-key');
        if (mergedTranslations[key]) {
            element.textContent = mergedTranslations[key];
        }
    });
}

// Usage example
updateAllTranslations('en'); // Change 'en' to another language code as needed
