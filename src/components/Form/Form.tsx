import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import { IItem } from "../Items/Items";
import Error from "./Error";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: "0.5rem 0 !important",
    },
    button: {
      margin: "0.5rem 0 !important",
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

  const { t } = useTranslation();

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

      <Error error={errors.title} field={t("Form.title")} />

      <TextField
        className={classes.input}
        fullWidth
        label="First Name"
        variant="outlined"
        {...register("firstName", { required: true })}
      />

      <Error error={errors.firstName} field={t("Form.firstName")} />

      <TextField
        className={classes.input}
        fullWidth
        label="Last Name"
        variant="outlined"
        {...register("lastName", { required: true })}
      />

      <Error error={errors.lastName} field={t("Form.lastName")} />

      {isLoading ? (
        <LinearProgress />
      ) : (
        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          type="submit"
          size="large"
        >
          <Trans i18nKey="Form.submit" />
        </Button>
      )}
    </Box>
  );
};

export default Form;
