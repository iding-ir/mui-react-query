import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getItem } from "../../api";
import NotFound from "../NotFound/NotFound";
import Contents from "../Contents/Contents";
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
  const { id } = useParams();

  const { data, isLoading } = useQuery("item", () => getItem(id as string));

  return (
    <Box sx={styles.page}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : data === "Not found" ? (
        <NotFound />
      ) : (
        <Contents item={data} />
      )}
    </Box>
  );
};

export default Page;
