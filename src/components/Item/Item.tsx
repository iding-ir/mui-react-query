import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useMutation, useQueryClient } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

import { deleteItem } from "../../api";
import { IItem } from "../Items/Items";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: "1rem",
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
      sx={{ width: 275, display: "flex", flexDirection: "column" }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          {isLoading ? <LinearProgress /> : title}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {isLoading ? "" : `By: ${firstName} ${lastName}`}
        </Typography>
      </CardContent>

      <CardActions>
        <Button disabled={isLoading} size="small" onClick={handleEdit}>
          Edit
        </Button>

        <Button disabled={isLoading} size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
