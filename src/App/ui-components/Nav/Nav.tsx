import NavItem from "./NavItem";
import clsx from "clsx";
import "./nav.scss";
import { TItem } from "../../Components/SideBar/navLinkSource";

type props = {
  items?: TItem[];
  isVertical?: boolean;
};

function Nav({ items, isVertical = false }: props) {
  return (
    <nav className={clsx("nav ", isVertical && "nav--vertical")}>
      <ul>
        {items?.map((item, index) => {
          return <NavItem key={index} {...item} />;
        })}
      </ul>
    </nav>
  );
}

export default Nav;
