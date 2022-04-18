import { Route, Routes } from "react-router-dom";
import { SideBar } from "./Components";
import { Dashboard } from "./Pages";
import "./app.scss";
import "../scss/main.scss";

const App = () => {
  return (
    <div className="app">
      <SideBar classes="left" />
      <main className="grid-main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
