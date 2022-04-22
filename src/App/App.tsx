import { Route, Routes } from "react-router-dom";
import { SideBar } from "./Components";
import { Dashboard } from "./Pages";
import "./app.scss";
import "../scss/main.scss";
import NotFound from "./Pages/NotFound/index";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box className="app" bgcolor={"background.default"} color={"text.primary"}>
      <SideBar classes="left" />
      <main className="grid-main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Box>
  );
};

export default App;
