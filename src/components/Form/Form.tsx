import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import { IItem } from "../Items/Items";
import Error from "./Error";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      margin: "1rem 0",
    },
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
    watch,
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const title = watch("title");
  const firstName = watch("firstName");
  const lastName = watch("lastName");

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.input}
        fullWidth
        label="Title"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("title", { required: true })}
      />

      <Error error={errors.title} field={t("Form.title")} />

      <TextField
        className={classes.input}
        fullWidth
        label="First Name"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("firstName", { required: true })}
      />

      <Error error={errors.firstName} field={t("Form.firstName")} />

      <TextField
        className={classes.input}
        fullWidth
        label="Last Name"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("lastName", { required: true })}
      />

      <Error error={errors.lastName} field={t("Form.lastName")} />

      {isLoading ? (
        <LinearProgress className={classes.loader} />
      ) : (
        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          disabled={!title || !firstName || !lastName}
        >
          <Trans i18nKey="Form.submit" />
        </Button>
      )}
    </Box>
  );
};

export default Form;
