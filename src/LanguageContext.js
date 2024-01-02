'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const initializeLanguage = async () => {
      if (typeof window !== 'undefined' && typeof Storage !== 'undefined') {
        // Prüfe, ob localStorage-Funktionalität unterstützt wird
        const storedLanguage = localStorage.getItem('language');
        setLanguage(storedLanguage);
      }
    };

    initializeLanguage();
  }, []); // Leeres Abhängigkeitsarray, um sicherzustellen, dass dies nur einmal beim Montieren ausgeführt wird

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};