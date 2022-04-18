import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import Typography from "../../Typography";
import { IHeaderChart } from "../types";
import "./headerChart.scss";

function HeaderChart({ title, subtitle }: IHeaderChart) {
  return (
    <div className="boxHeader">
      <div className="headerChart_title">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </div>
      <div>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <Button className="active">Week</Button>
          <Button>month</Button>
          <Button>year</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default HeaderChart;
