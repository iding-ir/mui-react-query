import { useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

import getLanguage from "./getLanguage";

interface ILanguageContext {
  language?: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: undefined,
  setLanguage: () => {},
});

export const useLanguage = (defaultLanguage?: string) => {
  const { i18n } = useTranslation();

  const { iLanguage } = getLanguage(defaultLanguage);

  const [language, setLanguage] = useState(iLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);

    localStorage.setItem("language", language);
  }, [i18n, language]);

  return { language, setLanguage };
};
