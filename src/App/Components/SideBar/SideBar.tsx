import { Badge } from "@mui/material";
import clsx from "clsx";
import {
  Avatar,
  SettingIcon,
  ShareIcon,
  Typography,
} from "../../ui-components";
import { Nav } from "../../ui-components";
import IconButton from "../../ui-components/IconButton/IconButton";
import "./sidebar.scss";

function SideBar({ classes }: { classes?: string }) {
  return (
    <div className={clsx(`sidebar`, classes && `${classes}`)}>
      <div className="sidebar-share flex flex-space-between flex-align-center  bg--primary">
        <IconButton>
          <ShareIcon />
        </IconButton>
        <Typography color="white" variant="h6">
          concept
        </Typography>
      </div>
      <div className="sidebar-user bg--secondary flex">
        <Badge badgeContent={44} color="primary" overlap="circular">
          <Avatar />
        </Badge>
        <div className="sidebar-user_info">
          <Typography color="white" variant="subtitle1">
            Bouchoucha Slim
          </Typography>
          <Typography color="white" variant="subtitle2">
            Web Developer, Tunisia TN
          </Typography>
        </div>
      </div>
      <Nav isVertical />
      <div className="sidebar-setting flex flex-justify-center flex-align-center bg--primary">
        <IconButton>
          <SettingIcon />
        </IconButton>
        <Typography color="white" variant="h6" className="text-capitalize">
          setting
        </Typography>
      </div>
    </div>
  );
}

export default SideBar;
