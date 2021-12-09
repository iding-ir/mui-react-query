import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import { getStory } from "../../api";
import NotFound from "../NotFound/NotFound";
import Contents from "../Contents/Contents";
import Head from "../Head/Head";
import { styles } from "./styles";

const Story = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const { data, isLoading } = useQuery("story", () => getStory(id as string));

  return (
    <Box sx={styles.story}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : data === "Not found" ? (
        <>
          <Head title={t("Title.notFound")} />

          <NotFound />
        </>
      ) : (
        <>
          <Head title={t("Title.story", { title: data?.title })} />

          <Contents story={data} />
        </>
      )}
    </Box>
  );
};

export default Story;
