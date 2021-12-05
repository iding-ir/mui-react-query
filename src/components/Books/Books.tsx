import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    book: {
      margin: "1rem",
    },
  })
);

interface Book {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  date: string;
}

interface Props {
  books: Book[];
}

const Books = ({ books }: Props) => {
  const classes = useStyles();

  return (
    <>
      {books.map((book: Book) => {
        const { id, title, first_name, last_name } = book;

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
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Books;
