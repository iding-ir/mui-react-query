import { useTranslation } from "react-i18next";

import Items from "../Items/Items";
import Head from "../Head/Head";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t("Title.home")} />

      <Items />
    </>
  );
};

export default Home;
