import { useContext } from "react";
import { useTranslation, Trans } from "react-i18next";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useMutation, useQueryClient } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";

import { deleteStory } from "../../api";
import { PromptContext } from "../Prompt/usePrompt";
import { IStory } from "../../types";
import { styles } from "./styles";

interface Props {
  story: IStory;
}

const Thumbnail = ({ story }: Props) => {
  const { id, title, author } = story;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { setPrompt } = useContext(PromptContext);

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
    <Card sx={styles.story} key={id}>
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
        <Tooltip title={<Trans i18nKey="Story.edit" />}>
          <IconButton
            color="primary"
            disabled={isLoading}
            size="small"
            onClick={handleEdit}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Box sx={styles.pusher} />

        <Tooltip title={<Trans i18nKey="Story.delete" />}>
          <IconButton
            color="warning"
            disabled={isLoading}
            size="small"
            onClick={() => {
              setPrompt({
                open: true,
                title: t("Prompt.title"),
                content: (
                  <Trans
                    i18nKey="Prompt.content"
                    values={{ title: title.toUpperCase() }}
                    components={{ div: <div /> }}
                  />
                ),
                submit: t("Prompt.submit"),
                cancel: t("Prompt.cancel"),
                onSubmit: handleDelete,
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Thumbnail;