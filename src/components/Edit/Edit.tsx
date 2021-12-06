import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Trans } from "react-i18next";
import Typography from "@mui/material/Typography";

import { getItem, editItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
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
    <>
      <Typography variant="h5" component="div">
        <Trans i18nKey="Edit.notFound" />
      </Typography>

      <Typography variant="h6" component="div">
        <Link className={classes.link} to="/">
          <Trans i18nKey="Edit.goBack" />
        </Link>
      </Typography>
    </>
  ) : (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
