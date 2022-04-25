import { DatePiker, Typography } from "../../../ui-components";
import "./efficiency.scss";
import EfficientItem from "./EfficientItem";
import { efficiencyData } from "../../../Constants/dataConfig";

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
        {efficiencyData.map((item, index) => {
          const { title, subtitle, value, valueBuffer, countBadge } = item;
          return (
            <EfficientItem
              key={index}
              title={title}
              subtitle={subtitle}
              value={value}
              countBadge={countBadge}
              valueBuffer={valueBuffer}
              onClick={() => {
                return;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Efficiency;
