import { ButtonGroup as ButtonGroupMUI, ButtonGroupProps } from "@mui/material";
import "./buttonGroup.scss";

function ButtonGroup({ ...props }: ButtonGroupProps) {
  return (
    <>
      <ButtonGroupMUI {...props} className="buttonGroup underline-indicators">
        {props.children}
      </ButtonGroupMUI>
    </>
  );
}

export default ButtonGroup;
