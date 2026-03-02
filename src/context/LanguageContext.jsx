import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from local storage, fallback to browser preference, or default to 'en'
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        if (saved) return saved;
        const userLang = navigator.language || navigator.userLanguage;
        const shortLang = userLang.substring(0, 2);
        if (['en', 'fr', 'ar'].includes(shortLang)) return shortLang;
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        if (language === 'ar') {
            document.documentElement.classList.add('font-arabic');
        } else {
            document.documentElement.classList.remove('font-arabic');
        }
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
            if (result === undefined) return key; // Fallback if key not found
            result = result[k];
        }
        return result || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
