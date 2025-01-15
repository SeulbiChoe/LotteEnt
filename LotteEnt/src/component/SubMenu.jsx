const SubMenu = (submenus) => {
  return (
    <>
      {submenus.submenus.map((submenu, index) => {
        return (
          <li key={index}>
            <a href="">{submenu.title}</a>
          </li>
        );
      })}
    </>
  );
};
export default SubMenu;
