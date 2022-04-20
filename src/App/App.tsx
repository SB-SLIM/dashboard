import { Route, Routes } from "react-router-dom";
import { SideBar } from "./Components";
import { Dashboard } from "./Pages";
import "./app.scss";
import "../scss/main.scss";
import NotFound from "./Pages/NotFound/index";

const App = () => {
  return (
    <div className="app">
      <SideBar classes="left" />
      <main className="grid-main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
