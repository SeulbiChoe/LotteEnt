import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import NavContainer from "./NavContainer";

const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: 1024});
  return isDesktop ? children : null;
};
// const Tablet = ({children}) => {
//   const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023});
//   return isTablet ? children : null;
// };
const Mobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 767});
  return isMobile ? children : null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [subIsOpen, setSubIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // const subMenuHandleToggle = () => {
  //   setSubIsOpen(!subIsOpen);
  // };

  return (
    <header className="header">
      <Mobile>
        <div className="mo-nav-container">
          <h1 className="logo">
            <a href=""></a>
          </h1>
          <button
            style={{display: isOpen ? "none" : "block"}}
            className="menu-open-btn"
            onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            style={{display: isOpen ? "block" : "none"}}
            className="menu-close-btn"
            onClick={handleToggle}>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={"mo-gnb " + (isOpen ? "active" : "")}>
          <NavContainer />
          {/* <div className="mo-gnb-container">
            <ul className="mo-gnb-wrap">
              <li>
                <button
                  className="main-menu-item"
                  onClick={subMenuHandleToggle}>
                  Moives
                </button>
                <div className={"sub-menu-wrap " + (subIsOpen ? "active" : "")}>
                  <button
                    className="prev-btn"
                    onClick={subMenuHandleToggle}></button>
                  <ul>
                    <li className="sub-menu-title">Movies</li>
                    <li>
                      <a href="">Now Playing</a>
                    </li>
                    <li>
                      <a href="">Coming Soon</a>
                    </li>
                    <li>
                      <a href="">All Movies</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <button className="main-menu-item">Company</button>
                <div className="sub-menu-wrap">
                  <button className="prev-btn"></button>
                  <ul>
                    <li className="sub-menu-title">Company</li>
                    <li>
                      <a href="">Lotte Group</a>
                    </li>
                    <li>
                      <a href="">Lotte Cultureworks</a>
                    </li>
                    <li>
                      <a href="">Lotte Cinema</a>
                    </li>
                    <li>
                      <a href="">Lotte Entertainment</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div> */}
        </nav>
      </Mobile>
      <Desktop>Desktop or laptop</Desktop>
    </header>
  );
};

export default Header;
