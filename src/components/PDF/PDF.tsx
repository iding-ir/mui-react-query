import { Trans } from "react-i18next";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Theme } from "@mui/material";

import { IItem } from "../Items/Items";

interface Props {
  item: IItem;
  theme: Theme;
}

const PDF = ({ item, theme }: Props) => {
  const { title, firstName, lastName, content } = item;

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      fontSize: "12",
      lineHeight: "1.5",
      padding: "40",
      textAlign: "left",
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
    },
    section: {
      padding: "20 0",
    },
    divider: {
      borderBottom: "1px",
      borderColor: "#cccccc",
    },
    title: {
      fontSize: "24",
      lineHeight: "1.5",
      color: theme.palette.primary.main,
    },
    author: {
      fontSize: "16",
      lineHeight: "1.5",
      color: theme.palette.text.secondary,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ ...styles.section, ...styles.divider }}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>

          <Text style={styles.author}>
            <Trans i18nKey="Content.author" values={{ firstName, lastName }} />
          </Text>
        </View>

        <View style={styles.section}>
          <Text>{content}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
