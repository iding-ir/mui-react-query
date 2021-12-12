import { useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";

import PDF from "../PDF/PDF";
import { IStory } from "../../types";
import { ThemeContext } from "../Theme/useTheme";
import { styles } from "./styles";

interface Props {
  story: IStory;
}

const Download = ({ story }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box sx={styles.wrapper}>
      <PDFDownloadLink
        document={<PDF story={story} theme={theme} />}
        fileName={story.title}
      >
        {({ blob, url, loading, error }) => (
          <Button
            sx={styles.download}
            disabled={loading}
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            <Trans i18nKey="Download.download" />
          </Button>
        )}
      </PDFDownloadLink>
    </Box>
  );
};

export default Download;
