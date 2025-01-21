import {useState, useEffect, useRef} from "react";
import SubMenu from "./SubMenu";

const MenuItems = (items) => {
  const [subIsOpen, setSubIsOpen] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handeler = (event) => {
      if (subIsOpen && ref.current && !ref.current.contains(event.target))
        setSubIsOpen(false);
    };
    document.addEventListener("click", handeler);
    return () => {
      document.removeEventListener("click", handeler);
    };
  });
  const subMenuHandleToggle = () => {
    setSubIsOpen(!subIsOpen);
  };

  return (
    <>
      {items.items.submenu ? (
        <li ref={ref}>
          <button className="main-menu-item" onClick={subMenuHandleToggle}>
            {items.items.title}
          </button>
          <div className={"sub-menu-wrap " + (subIsOpen ? "active" : "")}>
            <button className="prev-btn" onClick={subMenuHandleToggle}></button>
            <ul>
              <li className="sub-menu-title">
                {items.items.title}
                <button
                  className="menu-close-btn"
                  onClick={subMenuHandleToggle}>
                  <span></span>
                  <span></span>
                </button>
              </li>
              <SubMenu submenus={items.items.submenu} items={items.items} />
            </ul>
          </div>
        </li>
      ) : (
        <li>
          <a href="">{items.items.title}</a>
        </li>
      )}
    </>
  );
};
export default MenuItems;
