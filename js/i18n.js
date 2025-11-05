import { translations } from "./translations.js";

let currentLang = localStorage.getItem("lang") || "es";

function getTranslation(key) {
    return translations[currentLang]?.[key] || key;
}

function getNestedTranslation(key) {
    const keys = key.split("."); // Split the key into parts
    if (keys.length === 1) {
        return getTranslation(key);
    }
    let translation = translations[currentLang];

    for (const part of keys) {
        if (translation && typeof translation === "object" && part in translation) {
            translation = translation[part];
        } else {
            console.warn(`Translation for key '${key}' not found in language '${currentLang}'.`);
            return key; // Return the key itself if translation is not found
        }
    }

    return translation;
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = getNestedTranslation(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.placeholder = getNestedTranslation(key);
    });
}

export function toggleLanguage() {
    const newLang = currentLang === "es" ? "en" : "es";
    setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});

window.toggleLanguage = toggleLanguage;
