import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

import { getBook, editBook } from "../../api";
import { Book } from "../Books/Books";
import Form from "../Form/Form";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(editBook);

  const { data, isLoading } = useQuery("book", () => getBook(id as string));

  const onSubmit = async (book: Partial<Book>) => {
    await mutateAsync({ ...book, id });

    queryClient.invalidateQueries("books");

    navigate("/");
  };

  return (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
