import { useContext, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value as string);
  };

  const clearSearch = () => {
    setKeyword("");
  };

  return (
    <Box sx={styles.search}>
      <FormControl key="search-keyword" sx={styles.keyword}>
        <InputLabel htmlFor="search-keyword">
          {t("Search.keyword", { type })}
        </InputLabel>

        <OutlinedInput
          id="search-keyword"
          value={keyword}
          onChange={handleChange}
          label={t("Search.keyword", { type })}
          endAdornment={
            keyword && (
              <InputAdornment position="end">
                <IconButton
                  aria-label={t("Search.clear")}
                  onClick={clearSearch}
                  onMouseDown={clearSearch}
                  edge="end"
                >
                  <HighlightOffIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>

      <FormControl key="search-type" sx={styles.type}>
        <InputLabel htmlFor="search-type">{t("Search.type")}</InputLabel>

        <Select
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
