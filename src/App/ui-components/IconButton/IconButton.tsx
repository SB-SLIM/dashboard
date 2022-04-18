import { IconButton as IconButtonMUI, IconButtonProps } from "@mui/material";

function IconButton({ size, children, ...props }: IconButtonProps) {
  return (
    <>
      <IconButtonMUI size={size} {...props}>
        {children}
      </IconButtonMUI>
    </>
  );
}

export default IconButton;
