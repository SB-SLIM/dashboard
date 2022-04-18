import { Badge } from "@mui/material";
import { Button, ProgressBar, Typography } from "../../../../ui-components";
import "./efficientItem.scss";
import { ArrowDownWordIcon, ArrowUpWordIcon } from "../../../../ui-components";

interface IEfficientItem {
  title?: string;
  subtitle?: string;
  value?: number;
  valueBuffer?: number;
  countBadge?: number;
  progressInfo?: { value?: number; isUp?: boolean };
  onClick?: () => void;
}

function EfficientItem({
  title = "title",
  subtitle = "subtitle",
  value,
  valueBuffer,
  countBadge = 5,
  progressInfo = { value: 0, isUp: true },
  onClick,
}: IEfficientItem) {
  return (
    <div className="efficient-Item flex">
      <div className="efficient-Item_info">
        <div className="title flex">
          <Typography variant="h6">{title}</Typography>
          <Badge badgeContent={countBadge} color="secondary" />
        </div>

        <Typography variant="body1">{subtitle}</Typography>
      </div>
      <div className="efficient-Item_progress flow">
        <ProgressBar value={value} valueBuffer={valueBuffer} />
        <Typography variant="body2">
          {progressInfo?.isUp ? (
            <ArrowUpWordIcon color="black" size="small" />
          ) : (
            <ArrowDownWordIcon />
          )}
          {progressInfo?.isUp ? "+" : "-"}
          {progressInfo?.value}% than last month
        </Typography>
      </div>
      <Button variant="outlined" onClick={onClick}>
        Inspect
      </Button>
    </div>
  );
}

export default EfficientItem;
