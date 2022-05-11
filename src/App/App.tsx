import "./app.scss";
import "../scss/main.scss";
import "react-toastify/dist/ReactToastify.min.css";

import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, ProtectedRoute, SharedAdminLayout } from "./Pages";
import NotFound from "./Pages/NotFound/index";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<SharedAdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
