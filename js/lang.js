import { translations } from "./translations.js";

let currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const translation = getNestedTranslation(key);
        el.textContent = translation;
    });
}

function toggleLanguage() {
    setLanguage(currentLang === "es" ? "en" : "es");
}

function getNestedTranslation(key) {
    const keys = key.split("."); // Split the key into parts
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

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});
