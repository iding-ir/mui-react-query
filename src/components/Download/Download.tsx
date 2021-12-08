import { useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";

import PDF from "../PDF/PDF";
import { IItem } from "../Items/Items";
import { Styles } from "../../types";
import { ThemeContext } from "../Theme/useTheme";

const styles: Styles = {
  download: {
    display: "inline-block !important",
    color: "secondary.main",
  },
};

interface Props {
  item: IItem;
}

const Download = ({ item }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <PDFDownloadLink
      document={<PDF item={item} theme={theme} />}
      fileName={item.title}
    >
      {({ blob, url, loading, error }) => (
        <Button sx={styles.download} disabled={loading} variant="contained">
          <Trans i18nKey="Download.download" />
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default Download;
