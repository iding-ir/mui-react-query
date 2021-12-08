import { useTranslation } from "react-i18next";

import Items from "../Items/Items";
import Head from "../Head/Head";
import Search from "../Search/Search";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t("Title.home")} />

      <Search />

      <Items />
    </>
  );
};

export default Home;
