import { DatePiker, Typography } from "../../../ui-components";
import "./efficiency.scss";
import { LinearProgress } from "@mui/material";
import EfficientItem from "./EfficientItem";

interface IEEfficiency {
  title: string;
}

function Efficiency({ title }: IEEfficiency) {
  return (
    <div className="efficiency">
      <div className="efficiency_header boxHeader">
        <Typography variant="h6">{title}</Typography>
        <form className="efficiency_form">
          <DatePiker />
          <DatePiker title="to" />
        </form>
      </div>
      <div className="efficiency_body">
        <EfficientItem
          title="Title"
          subtitle="subtitle"
          value={15}
          valueBuffer={20}
          onClick={() => {
            return;
          }}
        />
      </div>
    </div>
  );
}

export default Efficiency;
