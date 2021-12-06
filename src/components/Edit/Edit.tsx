import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

import { getItem, editItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(editItem);

  const { data, isLoading } = useQuery("item", () => getItem(id as string));

  const onSubmit = async (item: Partial<IItem>) => {
    await mutateAsync({ ...item, id });

    queryClient.invalidateQueries("items");

    navigate("/");
  };

  return (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
