import { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

import { LanguageContext } from "./useLanguage";
import { languages, ILanguage } from ".";
import { styles } from "./styles";

const Language = () => {
  const { t } = useTranslation();

  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event: SelectChangeEvent) => {
    const language = event.target.value;

    setLanguage(language);
  };

  const renderStories = () =>
    Object.values(languages).map((language: ILanguage) => {
      return (
        <MenuItem value={language.value} key={language.value}>
          <ListItemIcon sx={styles.icon}>{language.icon}</ListItemIcon>

          <ListItemText sx={styles.text} primary={t(language.name)} />
        </MenuItem>
      );
    });

  return (
    <FormControl sx={styles.language}>
      <Select
        value={language}
        label={t("Language.label")}
        onChange={handleChange}
        sx={styles.select}
        variant="standard"
        disableUnderline={true}
      >
        {renderStories()}
      </Select>
    </FormControl>
  );
};

export default Language;
