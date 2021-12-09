import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

import { SearchContext } from "./useSearch";
import { styles } from "./styles";

interface SearchType {
  key: string;
  label: string;
}

interface SearchTypes {
  [key: string]: SearchType;
}

export const searchTypes: SearchTypes = {
  title: {
    key: "title",
    label: "Search.title",
  },
  author: {
    key: "author",
    label: "Search.author",
  },
};

const Search = () => {
  const { t } = useTranslation();

  const { type, setType, keyword, setKeyword } = useContext(SearchContext);

  const handleSelect = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChange = (event: any) => {
    setKeyword(event.target.value as string);
  };

  return (
    <Box sx={styles.search}>
      <TextField
        value={keyword}
        onChange={handleChange}
        label={t("Search.keyword")}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        sx={styles.keyword}
      />

      <FormControl key="search-type" sx={styles.type}>
        <InputLabel id="search-type-label">{t("Search.type")}</InputLabel>

        <Select
          labelId="search-type-label"
          id="search-type"
          value={type}
          onChange={handleSelect}
          label={t("Search.type")}
          variant="outlined"
        >
          {Object.values(searchTypes).map((searchType: SearchType) => (
            <MenuItem value={searchType.key} key={searchType.key}>
              {t(searchType.label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Search;
