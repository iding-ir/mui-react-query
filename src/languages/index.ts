import { useState, useEffect, createContext } from "react";

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
  const [language, setLanguage] = useState(
    storedDefaultLanguage || defaultLanguage
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return { language, setLanguage };
};
