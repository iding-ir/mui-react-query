import { useState, createContext, ReactNode } from "react";

export interface PromptOptions {
  open: boolean;
  title: ReactNode;
  content: ReactNode;
  submit: ReactNode;
  cancel: ReactNode;
  onSubmit: () => void;
}

const iPrompt: PromptOptions = {
  open: false,
  title: "",
  content: "",
  submit: "",
  cancel: "",
  onSubmit: () => {},
};

interface IPromptContext {
  prompt: PromptOptions;
  setPrompt: (prompt: PromptOptions) => void;
}

export const PromptContext = createContext<IPromptContext>({
  prompt: iPrompt,
  setPrompt: () => {},
});

export const usePrompt = () => {
  const [prompt, setPrompt] = useState(iPrompt);

  return { prompt, setPrompt };
};
