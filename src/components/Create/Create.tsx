import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { postStory } from "../../api";
import { IStory } from "../../types";
import Form from "../Form/Form";
import Head from "../Head/Head";

const Create = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(postStory);

  const onSubmit = async (story: Partial<IStory>) => {
    await mutateAsync(story);

    queryClient.invalidateQueries("stories");

    navigate("/");
  };

  return (
    <>
      <Head title={t("Title.create")} />

      <Form defaultValues={{}} onSubmit={onSubmit} isLoading={isLoading} />
    </>
  );
};

export default Create;
