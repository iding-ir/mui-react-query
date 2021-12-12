import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";

import { styles } from "./styles";
import { PromptContext } from "../Prompt/usePrompt";

const Prompt = () => {
  const { prompt, setPrompt } = useContext(PromptContext);

  const { open, title, content, submit, cancel, onSubmit } = prompt;

  const handleClose = () => {
    setPrompt({ ...prompt, open: false });
  };

  const handleSubmit = () => {
    onSubmit();

    setPrompt({ ...prompt, open: false });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="prompt-title"
      aria-describedby="prompt-description"
    >
      <DialogTitle id="prompt-title">{title}</DialogTitle>

      <DialogContent sx={styles.dialog}>
        <DialogContentText id="prompt-description">{content}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          {cancel}
        </Button>

        <Button color="secondary" onClick={handleSubmit}>
          {submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Prompt;
