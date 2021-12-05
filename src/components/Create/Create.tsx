import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { postBook } from "../../api";
import { Book } from "../Books/Books";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: "1rem 0 !important",
    },
  })
);

const Create = () => {
  const classes = useStyles();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(postBook);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (book: Partial<Book>) => {
    await mutateAsync(book);

    queryClient.invalidateQueries("books");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.input}
        fullWidth
        label="Title"
        variant="outlined"
        {...register("title", { required: true })}
      />

      {errors.title && <span>This field is required</span>}

      <TextField
        className={classes.input}
        fullWidth
        label="First Name"
        variant="outlined"
        {...register("first_name", { required: true })}
      />

      {errors.first_name && <span>This field is required</span>}

      <TextField
        className={classes.input}
        fullWidth
        label="Last Name"
        variant="outlined"
        {...register("last_name", { required: true })}
      />

      {errors.last_name && <span>This field is required</span>}

      <Button fullWidth variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default Create;
