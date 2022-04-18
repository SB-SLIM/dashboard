import {
  Alert as AlertMui,
  AlertProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Alert.scss";

type TAlert = AlertProps & IconButtonProps;

const Alert = ({ variant, severity, children, onClick, ...props }: TAlert) => {
  return (
    <div className="alert">
      <AlertMui
        variant={variant}
        severity={severity}
        {...props}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClick}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {children}
      </AlertMui>
    </div>
  );
};

export default Alert;
