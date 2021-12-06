import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { getItems } from "../../api";
import Item from "../Item/Item";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      position: "relative",
      margin: "5rem auto",
    },
  })
);
export interface IItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
}

const Items = () => {
  const { data: items, isLoading } = useQuery("items", getItems);

  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        items.map((item: IItem) => <Item item={item} />)
      )}
    </>
  );
};

export default Items;
