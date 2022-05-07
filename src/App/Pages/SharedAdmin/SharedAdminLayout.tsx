import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../Components";

function SharedAdminLayout() {
  return (
    <Box className="app">
      <SideBar classes="left" />
      <Container
        component="main"
        maxWidth={false}
        className="grid-main-container"
      >
        <Outlet />
      </Container>
    </Box>
  );
}

export default SharedAdminLayout;
