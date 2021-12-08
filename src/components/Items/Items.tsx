import { useContext } from "react";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getItems } from "../../api";
import Item from "../Item/Item";
import { Styles } from "../../types";
import { SearchContext } from "../Search/useSearch";

const styles: Styles = {
  items: {
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

export interface IItem {
  id: string;
  title: string;
  author: string;
  content: string;
  [key: string]: string;
}

const Items = () => {
  const { data: items, isLoading } = useQuery("items", getItems);

  const { keyword, type } = useContext(SearchContext);

  return (
    <Box sx={styles.items}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : (
        items
          .filter(
            (item: IItem) =>
              item[type]?.toLowerCase().indexOf(keyword.toLowerCase()) > -1
          )
          .map((item: IItem) => <Item key={item.id} item={item} />)
      )}
    </Box>
  );
};

export default Items;
