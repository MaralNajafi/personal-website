import NavListItem from "../ListItems/NavListItem";
import Tooltip from "../Tooltip/Tooltip";
import SVG from "../SVG/SVG";
import "./MainNav.css";
import { useLocation } from "react-router-dom";

const navListItems = [
  {
    name: "home",
    path: "/personal-website",
    id: 1,
  },
  {
    name: "about",
    path: "/personal-website/about",
    id: 2,
  },
  {
    name: "contact",
    path: "/personal-website/contact",
    id: 3,
  },
];

const NavListItems = () => {
  const location = useLocation();
  return (
    <>
      {navListItems.map((navListItem) => {
        return (
          <NavListItem
            path={navListItem.path}
            key={navListItem.id}
            active={navListItem.path === location.pathname}
          >
            <Tooltip text={navListItem.name}>
              <div className="d-none responsive-d-flex">
                <SVG id={navListItem.name} />
              </div>
            </Tooltip>
            <li className="responsive-d-none">
              <span>{navListItem.name}</span>
            </li>
          </NavListItem>
        );
      })}
    </>
  );
};

export default function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="d-flex ai-center">
        <NavListItems />
      </ul>
    </nav>
  );
}
