import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    a: {
      color: "text.primary",
      textDecoration: "none",
      fontSize: "1rem",
    },
  },
  loader: {
    margin: "1rem 0",
  },
  story: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", sm: "calc(50% - 2rem)", md: "calc(25% - 2rem)" },
  },
  content: {
    flexGrow: 1,
  },
  author: {
    fontSize: "1rem",
    color: "text.secondary",
  },
  pusher: {
    width: "100%",
  },
};
