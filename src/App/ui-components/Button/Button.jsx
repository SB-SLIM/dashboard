import { Button as ButtonMUI, ButtonProps } from "@mui/material";
import GradientBox from "../GradientBox";
import "./button.scss";

function Button({ variant, children, size, ...props }: ButtonProps) {
  if (variant === "outlined") {
    return (
      <>
        <GradientBox>
          <ButtonMUI variant={variant} size={size} {...props}>
            {children}
          </ButtonMUI>
        </GradientBox>
      </>
    );
  }

  return (
    <>
      <ButtonMUI variant={variant} size={size} {...props}>
        {children}
      </ButtonMUI>
    </>
  );
}

export default Button;
