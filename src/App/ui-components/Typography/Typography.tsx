import { Typography as TypographyMUI, TypographyProps } from "@mui/material";
function Typography({
  variant,
  align,
  children,
  color = "inherit",
  ...props
}: TypographyProps) {
  return (
    <>
      <TypographyMUI
        style={{ verticalAlign: "center" }}
        variant={variant}
        align={align}
        color={color}
        {...props}
      >
        {children}
      </TypographyMUI>
    </>
  );
}

export default Typography;
