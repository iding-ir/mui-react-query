import { useState, useEffect, createContext } from "react";

import getPage from "./getPage";

export interface PagesOptions {
  current: string;
}

interface IPagesContext {
  pages: PagesOptions;
  setPages: (pages: PagesOptions) => void;
}

export const PagesContext = createContext<IPagesContext>({
  pages: { current: "" },
  setPages: () => {},
});

export const usePages = (defaultPage?: string) => {
  const { iPage } = getPage(defaultPage);

  const [pages, setPages] = useState({ current: iPage });

  useEffect(() => {
    localStorage.setItem("pages", pages.current);
  }, [pages]);

  return { pages, setPages };
};
