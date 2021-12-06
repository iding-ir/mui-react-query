import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";

import { getItems } from "../../api";
import Item from "../Item/Item";

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
        <CircularProgress />
      ) : (
        items.map((item: IItem) => <Item item={item} />)
      )}
    </>
  );
};

export default Items;
