import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import { getItem } from "../../api";
import NotFound from "../NotFound/NotFound";
import Contents from "../Contents/Contents";
import Head from "../Head/Head";
import { Styles } from "../../types";

const styles: Styles = {
  page: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  loader: {
    position: "relative",
    margin: "5rem auto",
  },
};

const Page = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const { data, isLoading } = useQuery("item", () => getItem(id as string));

  return (
    <Box sx={styles.page}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : data === "Not found" ? (
        <>
          <Head title={t("Title.notFound")} />

          <NotFound />
        </>
      ) : (
        <>
          <Head title={t("Title.page", { title: data.title })} />

          <Contents item={data} />
        </>
      )}
    </Box>
  );
};

export default Page;
