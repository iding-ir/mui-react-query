import { useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
  language: string;
  setLanguage: (language: string) => void;
}

const storedDefaultLanguage = localStorage.getItem("language");

export const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  setLanguage: () => {},
});

interface Props {
  defaultLanguage?: string;
}

export const useLanguage = ({ defaultLanguage = "en" }: Props) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    storedDefaultLanguage || defaultLanguage
  );

  useEffect(() => {
    i18n.changeLanguage(language);

    localStorage.setItem("language", language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { language, setLanguage };
};
