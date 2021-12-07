import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { useMutation, useQueryClient } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";

import { deleteItem } from "../../api";
import { IItem } from "../Items/Items";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      margin: "1rem 0",
    },
    item: {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
    },
    author: {
      fontSize: "1rem",
    },
    pusher: {
      width: "100%",
    },
  })
);

interface Props {
  item: IItem;
}

const Item = ({ item }: Props) => {
  const { id, title, firstName, lastName } = item;

  const classes = useStyles();

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
    <Card
      className={classes.item}
      key={id}
      sx={{
        width: { xs: "100%", sm: "calc(50% - 2rem)", md: "calc(25% - 2rem)" },
      }}
    >
      <CardContent className={classes.content}>
        <Typography variant="h5" component="div">
          {isLoading ? <LinearProgress className={classes.loader} /> : title}
        </Typography>

        <Typography
          className={classes.author}
          color="text.secondary"
          gutterBottom
        >
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

        <Box className={classes.pusher} />

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
