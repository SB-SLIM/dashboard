import { Badge, Box, IconButton, Switch } from "@mui/material";
import clsx from "clsx";
import {
  Avatar,
  SettingIcon,
  ShareIcon,
  Typography,
  Nav,
} from "../../ui-components";
import "./sidebar.scss";

import { useTheme as useThemeMUI } from "@mui/material";
import { useTheme } from "../../../Theme";

function SideBar({ classes }: { classes?: string }) {
  const theme = useThemeMUI();

  const setMode = useTheme();

  return (
    <Box
      className={clsx(`sidebar`, classes && `${classes}`)}
      bgcolor={"background.default"}
      color={"text.primary"}
    >
      <Box
        className="sidebar-share flex flex-space-between flex-align-center"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <IconButton>
          <ShareIcon />
        </IconButton>
        <Typography color="white" variant="h6">
          concept
        </Typography>
      </Box>
      <Box
        className="sidebar-user flex"
        sx={{ backgroundColor: theme.palette.secondary.dark }}
      >
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
      </Box>
      <Nav isVertical />
      <div className="switch-Mode">
        <Typography>
          {theme.palette.mode === "light" ? "Light" : "Dark"} Mode
        </Typography>
        <Switch defaultChecked onChange={setMode.toggleColorMode} />
      </div>
      <Box
        className="sidebar-setting flex flex-justify-center flex-align-center"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <IconButton>
          <SettingIcon />
        </IconButton>
        <Typography color="white" variant="h6" className="text-capitalize">
          setting
        </Typography>
      </Box>
    </Box>
  );
}

export default SideBar;
