import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { postStory } from "../../api";
import { IStory } from "../../types";
import Form from "../Form/Form";
import Head from "../Head/Head";
import { SnackbarContext } from "../Snackbar/useSnackbar";

const Create = () => {
  const { t } = useTranslation();

  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(postStory);

  const onSubmit = async (story: Partial<IStory>) => {
    try {
      await mutateAsync(story);

      queryClient.invalidateQueries("stories");

      navigate("/");

      setSnackbar({
        ...snackbar,
        open: true,
        button: t("Snackbar.close"),
        message: t("Create.success"),
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        ...snackbar,
        open: true,
        button: t("Snackbar.close"),
        message: t("Create.failure"),
        severity: "error",
      });
    }
  };

  return (
    <>
      <Head title={t("Title.create")} />

      <Form defaultValues={{}} onSubmit={onSubmit} isLoading={isLoading} />
    </>
  );
};

export default Create;
