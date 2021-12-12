import { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getStory, editStory } from "../../api";
import { IStory } from "../../types";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import Head from "../Head/Head";
import { SnackbarContext } from "../Snackbar/useSnackbar";

const Edit = () => {
  const { t } = useTranslation();

  const { setSnackbar } = useContext(SnackbarContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(editStory);

  const { data } = useQuery("story", () => getStory(id as string));

  const onSubmit = async (story: Partial<IStory>) => {
    try {
      await mutateAsync({ ...story, id });

      queryClient.invalidateQueries("stories");

      navigate("/");

      setSnackbar({
        open: true,
        button: t("Snackbar.close"),
        message: t("Edit.success"),
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        button: t("Snackbar.close"),
        message: t("Edit.failure"),
        severity: "error",
      });
    }
  };

  return data === "Not found" ? (
    <>
      <Head title={t("Title.notFound")} />

      <NotFound />
    </>
  ) : (
    <>
      <Head title={t("Title.edit", { title: data?.title })} />

      <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
    </>
  );
};

export default Edit;
