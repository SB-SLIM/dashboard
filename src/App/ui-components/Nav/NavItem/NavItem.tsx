import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./navitem.scss";
import clsx from "clsx";
import { Link, useTheme } from "@mui/material";

interface INavItem {
  to: string;
  label: string;
  isActive?: boolean;
}

function NavItem({ to, label }: INavItem) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const theme = useTheme();

  return (
    <li className={clsx("nav-item", match && "active")}>
      <Link underline="none">
        <NavLink to={to} className="nav-link">
          {label}
        </NavLink>
      </Link>
    </li>
  );
}

export default NavItem;
