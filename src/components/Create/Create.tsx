import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { postItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";

const Create = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(postItem);

  const onSubmit = async (item: Partial<IItem>) => {
    await mutateAsync(item);

    queryClient.invalidateQueries("items");

    navigate("/");
  };

  return <Form defaultValues={{}} onSubmit={onSubmit} isLoading={isLoading} />;
};

export default Create;
