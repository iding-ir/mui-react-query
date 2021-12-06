import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";

import { IItem } from "../Items/Items";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: "1rem 0 !important",
    },
  })
);

interface Props {
  defaultValues: IItem | {};
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
        {...register("firstName", { required: true })}
      />

      {errors.firstName && <span>This field is required</span>}

      <TextField
        className={classes.input}
        fullWidth
        label="Last Name"
        variant="outlined"
        {...register("lastName", { required: true })}
      />

      {errors.lastName && <span>This field is required</span>}

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
