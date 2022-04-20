import clsx from "clsx";
import "./gradientBox.scss";

interface IGradientBox {
  children: React.ReactElement;
  styles: string;
}

function GradientBox({ children, styles }: IGradientBox) {
  return (
    <div className={clsx("gradient-box", styles && `${styles}`)}>
      {children}
    </div>
  );
}

export default GradientBox;
