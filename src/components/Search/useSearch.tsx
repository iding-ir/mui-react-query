import { useState, createContext } from "react";

interface ISearchContext {
  keyword: string;
  setKeyword: (keyword: string) => void;
  type: string;
  setType: (type: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  keyword: "",
  setKeyword: () => {},
  type: "",
  setType: () => {},
});

export const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const [type, setType] = useState("");

  return { keyword, setKeyword, type, setType };
};
