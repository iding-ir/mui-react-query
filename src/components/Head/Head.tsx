import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { ThemeContext } from "../Theme/useTheme";

interface Props {
  title: string;
}

const Head = ({ title }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="theme-color" content={theme.palette.primary.main} />
    </Helmet>
  );
};

export default Head;
