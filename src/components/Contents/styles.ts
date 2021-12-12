import { Styles } from "../../types";

export const styles: Styles = {
  wrapper: {
    padding: "1rem",
    backgroundColor: (theme) => theme.palette.background.paper,
  },
  container: {
    padding: "1rem",
    backgroundColor: (theme) => theme.palette.background.paper,
  },
  header: {
    width: "100%",
    paddingBottom: "1rem",
    marginBottom: "1rem",
    borderBottom: "rgba(130, 130, 130, 0.4) 1px solid",
  },
  title: {
    color: (theme) => theme.palette.primary.main,
  },
  author: {
    color: (theme) => theme.palette.text.secondary,
  },
  content: {
    color: (theme) => theme.palette.text.secondary,
    margin: "1rem 0",
  },
};
