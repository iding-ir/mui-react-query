import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useQuery, useMutation, useQueryClient } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";

import { getBooks, deleteBook } from "../../api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    book: {
      margin: "1rem",
    },
  })
);

export interface Book {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  date: string;
}

const Books = () => {
  const classes = useStyles();

  const { data: books, status: getStatus } = useQuery("books", getBooks);

  const queryClient = useQueryClient();

  const { mutateAsync, status: deleteStatus } = useMutation(deleteBook);

  return (
    <>
      {getStatus === "loading" || deleteStatus === "loading" ? (
        <CircularProgress />
      ) : (
        books.map((book: Book) => {
          const { id, title, first_name, last_name } = book;

          const handleDelete = async () => {
            await mutateAsync(id);

            queryClient.invalidateQueries("books");
          };

          return (
            <Card
              className={classes.book}
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
                  By: {first_name} {last_name}
                </Typography>
              </CardContent>

              <CardActions>
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

export default Books;
