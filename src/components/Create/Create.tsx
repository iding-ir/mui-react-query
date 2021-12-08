import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { postItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";
import Head from "../Head/Head";

const Create = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(postItem);

  const onSubmit = async (item: Partial<IItem>) => {
    await mutateAsync(item);

    queryClient.invalidateQueries("items");

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
