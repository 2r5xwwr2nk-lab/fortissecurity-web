"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("sk");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("fortis-language");

    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage) => {
    setLanguageState(newLanguage);
    localStorage.setItem("fortis-language", newLanguage);
  };

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language] || translations.sk,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage musí byť použitý vo vnútri LanguageProvider");
  }

  return context;
}