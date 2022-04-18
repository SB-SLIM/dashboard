import { Typography } from "../../ui-components";
import IconButton from "../../ui-components/IconButton/IconButton";
import "./card.scss";

interface ICard {
  label: string;
  icon: React.ReactNode;
}

function Card({ label, icon }: ICard) {
  return (
    <div className="card bg--primary flex">
      <Typography color="white" variant="h4">
        {label}
      </Typography>
      <IconButton>{icon}</IconButton>
    </div>
  );
}

export default Card;
