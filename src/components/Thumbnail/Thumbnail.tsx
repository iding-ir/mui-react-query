import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, useQueryClient } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

import { deleteStory } from "../../api";
import { IStory } from "../../types";
import { styles } from "./styles";

interface Props {
  story: IStory;
}

const Thumbnail = ({ story }: Props) => {
  const { id, title, author } = story;

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(deleteStory);

  const handleEdit = async () => {
    queryClient.invalidateQueries("story");

    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    await mutateAsync(id);

    queryClient.invalidateQueries("stories");
  };

  return (
    <Card sx={styles.story} key={id} data-test-id="Thumbnail_CARD">
      <CardContent sx={styles.content}>
        <Typography variant="h6" component="div">
          {isLoading ? (
            <LinearProgress sx={styles.loader} />
          ) : (
            <Box sx={styles.link}>
              <Link to={`/story/${id}`}>{title.toUpperCase()}</Link>
            </Box>
          )}
        </Typography>

        <Typography sx={styles.author} gutterBottom>
          {isLoading ? null : (
            <Trans i18nKey="Story.author" values={{ author }} />
          )}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          color="primary"
          disabled={isLoading}
          size="small"
          onClick={handleEdit}
          data-test-id="Thumbnail_EDIT"
        >
          <Trans i18nKey="Story.edit" />
        </Button>

        <Box sx={styles.pusher} />

        <Button
          color="warning"
          disabled={isLoading}
          size="small"
          onClick={handleDelete}
          data-test-id="Thumbnail_DELETE"
        >
          <Trans i18nKey="Story.delete" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Thumbnail;
