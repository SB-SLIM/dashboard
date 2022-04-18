import NavItem from "./NavItem";
import clsx from "clsx";
import "./nav.scss";

interface INav {
  items?: Array<TItem>;
  isVertical?: boolean;
}

export type TItem = {
  to: string;
  label: string;
};

const itemsInit: Array<TItem> = [
  { to: "/", label: "home" },
  { to: "/testPage", label: "testPage" },
];

function Nav({ items = itemsInit, isVertical = false }: INav) {
  return (
    <nav className={clsx("nav ", isVertical && "nav--vertical")}>
      <ul>
        {items.map((item: TItem, index: number) => {
          return <NavItem key={index} {...item} />;
        })}
      </ul>
    </nav>
  );
}

export default Nav;
