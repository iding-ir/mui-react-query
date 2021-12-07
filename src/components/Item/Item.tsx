import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, useQueryClient } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

import { deleteItem } from "../../api";
import { IItem } from "../Items/Items";
import { Styles } from "../../types";

const styles: Styles = {
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
  item: {
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

interface Props {
  item: IItem;
}

const Item = ({ item }: Props) => {
  const { id, title, firstName, lastName } = item;

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(deleteItem);

  const handleEdit = async () => {
    queryClient.invalidateQueries("item");

    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    await mutateAsync(id);

    queryClient.invalidateQueries("items");
  };

  return (
    <Card sx={styles.item} key={id}>
      <CardContent sx={styles.content}>
        <Typography variant="h6" component="div">
          {isLoading ? (
            <LinearProgress sx={styles.loader} />
          ) : (
            <Box sx={styles.link}>
              <Link to={`/page/${id}`}>{title.toUpperCase()}</Link>
            </Box>
          )}
        </Typography>

        <Typography sx={styles.author} gutterBottom>
          {isLoading ? null : (
            <Trans i18nKey="Item.author" values={{ firstName, lastName }} />
          )}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          color="primary"
          disabled={isLoading}
          size="small"
          onClick={handleEdit}
        >
          <Trans i18nKey="Item.edit" />
        </Button>

        <Box sx={styles.pusher} />

        <Button
          color="warning"
          disabled={isLoading}
          size="small"
          onClick={handleDelete}
        >
          <Trans i18nKey="Item.delete" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
