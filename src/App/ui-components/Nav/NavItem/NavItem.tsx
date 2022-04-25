import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navitem.scss";
import clsx from "clsx";


interface INavItem {
  to: string;
  label: string;
  isActive?: boolean;
}

function NavItem({ to, label }: INavItem) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  

  return (
    <li className={clsx("nav-item", match && "active")}>
      <NavLink to={to} className="nav-link">
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
