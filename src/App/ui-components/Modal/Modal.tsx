import {
  Box,
  IconButton,
  Modal as ModalMUI,
  ModalProps,
  Typography,
  useTheme,
} from "@mui/material";
import { CloseIcon } from "../Icons";
import "./modal.scss";

interface IModal {
  setOpen(): void;
  label?: string;
}

type TModal = IModal & ModalProps;

function Modal({ children, open, setOpen, label }: TModal) {
  const handleClose = () => {
    setOpen();
  };

  return (
    <ModalMUI
      open={open}
      onClose={setOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box bgcolor={"background.default"} className="modal">
        <Box bgcolor={"background.default"} className="modal__header boxHeader">
          <Typography variant="h5">{label}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon color="black" />
          </IconButton>
        </Box>
        <div className="modal__body">{children}</div>
      </Box>
    </ModalMUI>
  );
}

export default Modal;
