import NavListItem from "./NavListItem";
import Tooltip from "../Tooltip/Tooltip";
import SVG from "../SVG/SVG";

export default function MainNav() {
  const navListItems = [
    {
      name: "home",
      path: "/",
      id: 1,
    },
    {
      name: "about",
      path: "about",
      id: 2,
    },
    {
      name: "contact",
      path: "contact",
      id: 3,
    },
  ];

  const navListItem = navListItems.map((navListItem) => {
    return (
      <NavListItem path={navListItem.path} key={navListItem.id}>
        <Tooltip text={navListItem.name}>
          <div className="d-none responsive-d-flex">
            <SVG id={navListItem.name}/>
          </div>
        </Tooltip>
        <li className="">
          <span className="responsive-d-none">{navListItem.name}</span>
        </li>
      </NavListItem>
    );
  });

  return (
    <nav className="main-nav">
      <ul className="d-flex ai-center">{navListItem}</ul>
    </nav>
  );
}
