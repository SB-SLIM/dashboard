import "./img.scss";

interface IImg {
  size?: "small" | "medium" | "large";
  src?: string;
  alt?: string;
}

function Img({ size = "medium", src, alt }: IImg) {
  return <img className={`img img--${size}`} src={src} alt={alt} />;
}

export default Img;
