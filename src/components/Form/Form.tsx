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
  form: {
    margin: "1rem !important",
  },
  input: {
    marginBottom: "1rem",
  },
  textarea: {
    marginBottom: "1rem",
  },
  button: {
    marginBottom: "1rem",
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
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={styles.input}
        fullWidth
        label={t("Form.title")}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("title", { required: true })}
      />

      <Error error={errors.title} field={t("Form.title")} />

      <TextField
        sx={styles.input}
        fullWidth
        label={t("Form.author")}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("author", { required: true })}
      />

      <Error error={errors.author} field={t("Form.author")} />

      <TextField
        sx={styles.input}
        fullWidth
        label={t("Form.content")}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        multiline
        rows={4}
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
          disabled={!isValid}
        >
          <Trans i18nKey="Form.submit" />
        </Button>
      )}
    </Box>
  );
};

export default Form;
