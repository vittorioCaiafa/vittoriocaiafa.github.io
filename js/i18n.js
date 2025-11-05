import { translations } from "./translations.js";

let currentLang = localStorage.getItem("lang") || "es";

function getTranslation(key) {
    return translations[currentLang]?.[key] || key;
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = getTranslation(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.placeholder = getTranslation(key);
    });
}

export function toggleLanguage() {
    setLanguage(currentLang === "es" ? "en" : "es");
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});
