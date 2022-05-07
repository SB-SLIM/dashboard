import "./app.scss";
import "../scss/main.scss";

import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, ProtectedRoute, SharedAdminLayout } from "./Pages";
import NotFound from "./Pages/NotFound/index";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

const App = () => {
  const user = useSelector((state: RootState) => state.userAuth);

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Routes>
        {/* FIXME: path if user not connected redirect to /login */}
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<SharedAdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Box>
  );
};

export default App;
