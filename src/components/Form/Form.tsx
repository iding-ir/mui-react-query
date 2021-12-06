import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";

import { Book } from "../Books/Books";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: "1rem 0 !important",
    },
  })
);

interface Props {
  defaultValues: Book | {};
  onSubmit: any;
  isLoading: boolean;
}

const Form = ({ defaultValues, onSubmit, isLoading }: Props) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

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

      {isLoading ? (
        <LinearProgress />
      ) : (
        <Button fullWidth variant="contained" type="submit">
          Submit
        </Button>
      )}
    </Box>
  );
};

export default Form;
