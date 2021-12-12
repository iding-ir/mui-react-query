import { useContext } from "react";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getStories } from "../../api";
import Thumbnail from "../Thumbnail/Thumbnail";
import { SearchContext } from "../Search/useSearch";
import { IStory } from "../../types";
import { styles } from "./styles";

const Thumbnails = () => {
  const { data: stories, isLoading } = useQuery("stories", getStories);

  const { keyword, type } = useContext(SearchContext);

  const getFilteredStories = (stories: IStory[]) => {
    return stories.filter(
      (story: IStory) =>
        story[type]?.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  };

  return (
    <Box sx={styles.stories}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : (
        getFilteredStories(stories).map((story: IStory) => (
          <Thumbnail key={story.id} story={story} />
        ))
      )}
    </Box>
  );
};

export default Thumbnails;
