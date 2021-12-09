import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";

import { IItem } from "../Items/Items";
import Download from "../Download/Download";
import { Styles } from "../../types";

const styles: Styles = {
  wrapper: {
    padding: "1rem",
    bgcolor: "background.paper",
  },
  container: {
    padding: "1rem",
    bgcolor: "background.paper",
  },
  header: {
    width: "100%",
    paddingBottom: "1rem",
    marginBottom: "1rem",
    borderBottom: "rgba(130, 130, 130, 0.4) 1px solid",
  },
  title: {
    color: "primary.main",
  },
  author: {
    color: "text.secondary",
  },
  content: {
    color: "text.secondary",
    margin: "1rem 0",
  },
};

interface Props {
  item: IItem;
}

const Contents = ({ item }: Props) => {
  const { title, author, content } = item;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title} variant="h6" component="h6">
          {title.toUpperCase()}
        </Typography>

        <Typography sx={styles.author} variant="subtitle2" component="p">
          <Trans i18nKey="Content.author" values={{ author }} />
        </Typography>
      </Box>

      <Box sx={styles.content}>
        <Typography gutterBottom>{content}</Typography>
      </Box>

      <Download item={item} />
    </Box>
  );
};

export default Contents;
