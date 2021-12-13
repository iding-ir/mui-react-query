import { useState, createContext } from "react";

export interface PagesOptions {
  current: string;
}

const iPage = {
  current: "home",
};

interface IPagesContext {
  pages: PagesOptions;
  setPages: (pages: PagesOptions) => void;
}

export const PagesContext = createContext<IPagesContext>({
  pages: iPage,
  setPages: () => {},
});

export const usePages = () => {
  const [pages, setPages] = useState(iPage);

  return { pages, setPages };
};
