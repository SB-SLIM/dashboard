import { LinearProgress, LinearProgressProps } from "@mui/material";
import "./progressBar.scss";

function ProgressBar({
  value = 30,
  valueBuffer = 50,
  variant = "buffer",
  ...props
}: LinearProgressProps) {
  return (
    <>
      <LinearProgress
        value={value}
        valueBuffer={valueBuffer}
        variant={variant}
        {...props}
      />
    </>
  );
}

export default ProgressBar;
