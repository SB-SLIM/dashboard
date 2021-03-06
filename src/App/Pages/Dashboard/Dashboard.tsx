import "./dashboard.scss";
import InputSearch from "../../ui-components/Form/InputSearch";
import { Card } from "../../Components";
import Efficiency from "./Efficiency/Efficiency";
import {
  CalendarIcon,
  Chart,
  SettingIcon,
  ShareIcon,
} from "../../ui-components";
import Location from "./Location";
import Employees from "./Employees";

function Dashboard() {
  return (
    <div className="dashboard ">
      <div className="dashboard_search">
        <InputSearch />
      </div>
      <div className="dashboard_link grid">
        <Card label="Share Team Page" icon={<ShareIcon />} />
        <Card label="New Event" icon={<CalendarIcon />} />
        <Card label="Team Setting" icon={<SettingIcon />} />
      </div>
      {/* FIXME: Need to change className here: main maybe */}
      <div className="section-main grid-12 mt-large">
        <div className="g-col-6">
          <Chart type="bar" title="sales" subtitle="A constant monitor" />
        </div>
        <div className="g-col-6">
          <Efficiency title="Efficiency" />
        </div>
        <div className="g-col-9">
          <Employees />
        </div>
        <div className="g-col-3">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
