import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";

import { getItems } from "../../api";
import Item from "../Item/Item";
import { Styles } from "../../types";

const styles: Styles = {
  loader: {
    position: "relative",
    margin: "5rem auto",
  },
};

export interface IItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
}

const Items = () => {
  const { data: items, isLoading } = useQuery("items", getItems);

  return (
    <>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : (
        items.map((item: IItem) => <Item item={item} />)
      )}
    </>
  );
};

export default Items;
