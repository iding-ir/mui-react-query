import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { postBook } from "../../api";
import { Book } from "../Books/Books";
import Form from "../Form/Form";

const Create = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(postBook);

  const onSubmit = async (book: Partial<Book>) => {
    console.log(book);

    await mutateAsync(book);

    queryClient.invalidateQueries("books");

    navigate("/");
  };

  return <Form defaultValues={{}} onSubmit={onSubmit} isLoading={isLoading} />;
};

export default Create;
