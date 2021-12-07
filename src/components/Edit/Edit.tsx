import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

import { getItem, editItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(editItem);

  const { data } = useQuery("item", () => getItem(id as string));

  const onSubmit = async (item: Partial<IItem>) => {
    await mutateAsync({ ...item, id });

    queryClient.invalidateQueries("items");

    navigate("/");
  };

  return data === "Not found" ? (
    <NotFound />
  ) : (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
