import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

import { SearchContext } from "./useSearch";
import { Styles } from "../../types";

const styles: Styles = {
  search: {
    display: "flex",
    flexDirection: "row",
  },
  keyword: {
    width: "calc(100% - 170px)",
  },
  type: {
    width: "170px",
  },
};

interface SearchType {
  key: string;
  label: string;
}

interface SearchTypes {
  [key: string]: SearchType;
}

const searchTypes: SearchTypes = {
  author: {
    key: "author",
    label: "Search.author",
  },
  title: {
    key: "title",
    label: "Search.title",
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
        variant="standard"
        sx={styles.keyword}
      />

      <FormControl sx={styles.type}>
        <InputLabel id="search-type-label">{t("Search.type")}</InputLabel>

        <Select
          labelId="search-type-label"
          id="search-type"
          value={type}
          onChange={handleSelect}
          variant="standard"
        >
          {Object.values(searchTypes).map((searchType: SearchType) => (
            <MenuItem value={searchType.key}>{t(searchType.label)}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Search;