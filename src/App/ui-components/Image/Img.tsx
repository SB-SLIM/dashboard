import Typography from "../Typography";
import "./img.scss";

interface IImg {
  size?: "small" | "medium" | "large";
  img?: string;
  city?: string;
  region?: string;
}

function Img({ size = "medium", img, city, region }: IImg) {
  return (
    <div className={`img-root img--${size}`}>
      <img className="img" src={img} alt={city} />
      <div className="img_info text-capitalize">
        <Typography variant="subtitle2">{city}</Typography>
        <Typography variant="body2">{region}</Typography>
      </div>
    </div>
  );
}

export default Img;
