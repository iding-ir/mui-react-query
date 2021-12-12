import Button from "@mui/material/Button";
import { default as MUIDialog } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";

import { styles } from "./styles";
import { DialogContext } from "../Dialog/useDialog";

const Dialog = () => {
  const { dialog, setDialog } = useContext(DialogContext);

  const { open, title, content, submit, cancel, onSubmit } = dialog;

  const handleClose = () => {
    setDialog({ ...dialog, open: false });
  };

  const handleSubmit = () => {
    onSubmit();

    setDialog({ ...dialog, open: false });
  };

  return (
    <MUIDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>

      <DialogContent sx={styles.dialog}>
        <DialogContentText id="dialog-description">{content}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          {cancel}
        </Button>

        <Button color="secondary" onClick={handleSubmit}>
          {submit}
        </Button>
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
