import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    a: {
      color: "text.primary",
      fontSize: "1.1rem",
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
    fontSize: "0.9rem",
    color: "text.secondary",
  },
  actions: {
    borderTop: "1px solid rgba(130, 130, 130, 0.2)",
  },
  pusher: {
    width: "100%",
    flexShrink: "10",
  },
};
