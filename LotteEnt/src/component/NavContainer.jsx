import {menuItemsList} from "../menuItemsList";
import MenuItems from "./MenuItems";

const NavContainer = () => {
  return (
    <ul className="gnb-wrap">
      {menuItemsList.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
      })}
    </ul>
  );
};
export default NavContainer;
