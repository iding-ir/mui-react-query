import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getStory, editStory } from "../../api";
import { IStory } from "../../types";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import Head from "../Head/Head";

const Edit = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(editStory);

  const { data } = useQuery("story", () => getStory(id as string));

  const onSubmit = async (story: Partial<IStory>) => {
    await mutateAsync({ ...story, id });

    queryClient.invalidateQueries("stories");

    navigate("/");
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
