import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { getItem, editItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: "0 1rem",
      color: "#1976D2",
      textDecoration: "none",
      fontSize: "1rem",
    },
  })
);

const Edit = () => {
  const classes = useStyles();

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
    <Link className={classes.link} to="/">
      Item not found. Go back...
    </Link>
  ) : (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
