import { useTranslation } from "react-i18next";

import Stories from "../Thumbnails/Thumbnails";
import Head from "../Head/Head";
import Search from "../Search/Search";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t("Title.home")} />

      <Search />

      <Stories />
    </>
  );
};

export default Home;
