import { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import { routes, IRoute } from "../Pages/routes";
import { PagesContext } from "../Pages/usePages";
import { styles } from "./styles";

const Tabs = () => {
  const { pages, setPages } = useContext(PagesContext);

  const handleClick = (key: string) => {
    setPages({ ...pages, current: key });
  };

  return (
    <>
      {Object.values(routes).map(({ key, path, title, navbar }: IRoute) => {
        return (
          navbar && (
            <Typography
              key={key}
              variant="h6"
              noWrap
              component="div"
              sx={styles.link}
              data-selected={pages.current === key}
            >
              <Link to={path} onClick={() => handleClick(key)}>
                <Trans i18nKey={title} />
              </Link>
            </Typography>
          )
        );
      })}
    </>
  );
};

export default Tabs;
