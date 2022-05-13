import "./sidebar.scss";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Switch,
  Tooltip,
} from "@mui/material";
import clsx from "clsx";
import {
  Avatar,
  SettingIcon,
  ShareIcon,
  Typography,
  Nav,
  Menu,
} from "../../ui-components";
import { itemsInit } from "./navLinkSource";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setModeTheme } from "../../Redux/Theme/theme.slice";
import { RootState } from "../../Redux/store";
import React, { useMemo } from "react";
import { logoutUser } from "../../Redux/Auth/auth.thunk";

function SideBar({ classes }: { classes?: string }) {
  const { themeMode } = useSelector((state: RootState) => state.theme);
  const { user } = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch();

  const theme = useTheme();

  const setMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        dispatch(setModeTheme());
      },
    }),
    [themeMode]
  );

  /*********************** */

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /*********************/

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
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src={user?.photo} />
            </IconButton>
          </Tooltip>
        </Badge>
        <Menu
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          logout={() => dispatch(logoutUser())}
        />
        <div className="sidebar-user_info">
          <Typography color="white" variant="subtitle1">
            {user?.displayName ? user?.displayName : "Mr Anonymous"}
          </Typography>
          <Typography color="white" variant="subtitle2">
            Web Developer, Tunisia TN
          </Typography>
        </div>
      </Box>
      <Nav items={itemsInit} isVertical />
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
