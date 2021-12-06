import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useQuery, useMutation, useQueryClient } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import { getItems, deleteItem } from "../../api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: "1rem",
    },
  })
);

export interface Item {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  date: string;
}

const Items = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const { data: items, status: getStatus } = useQuery("items", getItems);

  const queryClient = useQueryClient();

  const { mutateAsync, status: deleteStatus } = useMutation(deleteItem);

  return (
    <>
      {getStatus === "loading" || deleteStatus === "loading" ? (
        <CircularProgress />
      ) : (
        items.map((item: Item) => {
          const { id, title, firstName, lastName } = item;

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
                  {title}
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  By: {firstName} {lastName}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" onClick={handleEdit}>
                  Edit
                </Button>

                <Button size="small" onClick={handleDelete}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })
      )}
    </>
  );
};

export default Items;
