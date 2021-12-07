import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { getItem, editItem } from "../../api";
import { IItem } from "../Items/Items";
import Form from "../Form/Form";
import { Styles } from "../../types";

const styles: Styles = {
  link: {
    a: {
      color: "primary.main",
      textDecoration: "none",
      fontSize: "1rem",
    },
  },
};

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
    <>
      <Typography variant="h5" component="div">
        <Trans i18nKey="Edit.notFound" />
      </Typography>

      <Typography variant="h6" component="div">
        <Box sx={styles.link}>
          <Link to="/">
            <Trans i18nKey="Edit.goBack" />
          </Link>
        </Box>
      </Typography>
    </>
  ) : (
    <Form defaultValues={data} onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default Edit;
