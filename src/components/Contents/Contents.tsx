import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";

import { IItem } from "../Items/Items";
import { Styles } from "../../types";

const styles: Styles = {
  header: {
    width: "100%",
    padding: "1rem 0",
    margin: "1rem 0",
    borderBottom: "rgba(130, 130, 130, 0.4) 1px solid",
  },
  title: {
    color: "primary.main",
  },
  author: {
    color: "text.secondary",
  },
};

interface Props {
  item: IItem;
}

const Contents = ({ item }: Props) => {
  console.log(item);

  const { title, firstName, lastName, content } = item;

  return (
    <>
      <Box sx={styles.header}>
        <Typography sx={styles.title} variant="h6" component="h6">
          {title.toUpperCase()}
        </Typography>

        <Typography sx={styles.author} variant="subtitle2" component="p">
          <Trans i18nKey="Content.author" values={{ firstName, lastName }} />
        </Typography>
      </Box>

      <Box>
        <Typography gutterBottom>{content}</Typography>
      </Box>
    </>
  );
};

export default Contents;
