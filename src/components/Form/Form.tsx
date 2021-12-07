import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import { IItem } from "../Items/Items";
import Error from "../Error/Error";
import { Styles } from "../../types";

const styles: Styles = {
  loader: {
    margin: "1rem 0",
  },
  input: {
    margin: "0.5rem 0 !important",
  },
  textarea: {
    margin: "0.5rem 0 !important",
  },
  button: {
    margin: "0.5rem 0 !important",
  },
};

interface Props {
  defaultValues: IItem | {};
  onSubmit: any;
  isLoading: boolean;
}

const Form = ({ defaultValues, onSubmit, isLoading }: Props) => {
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
        sx={styles.input}
        fullWidth
        label="Title"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("title", { required: true })}
      />

      <Error error={errors.title} field={t("Form.title")} />

      <TextField
        sx={styles.input}
        fullWidth
        label="First Name"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("firstName", { required: true })}
      />

      <Error error={errors.firstName} field={t("Form.firstName")} />

      <TextField
        sx={styles.input}
        fullWidth
        label="Last Name"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("lastName", { required: true })}
      />

      <Error error={errors.lastName} field={t("Form.lastName")} />

      <TextField
        sx={styles.input}
        fullWidth
        label="Content"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("content", { required: true })}
      />

      <Error error={errors.content} field={t("Form.content")} />

      {isLoading ? (
        <LinearProgress sx={styles.loader} />
      ) : (
        <Button
          sx={styles.button}
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
