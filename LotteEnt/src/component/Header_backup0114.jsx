import {useState} from "react";
import NavContainer from "./NavContainer";
import HeaderMediaQuery from "../mediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <HeaderMediaQuery.HeaderMobile>
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
        </nav>
      </HeaderMediaQuery.HeaderMobile>
      <HeaderMediaQuery.HeaderDesktop>
        <div className="dt-nav-container">
          <div className="dt-gnb">
            <h1 className="logo">
              <a href=""></a>
            </h1>
            <ul className="dt-gnb-wrap">
              <li>
                <button className="main-menu-item">Movies</button>
                <div className="sub-menu-wrap">
                  <div className="sub-menu-top">
                    <span className="sub-menu-title">Title</span>
                    <button className="menu-close-btn">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <ul>
                    <li>
                      <a href="">movie1</a>
                    </li>
                    <li>
                      <a href="">movie1</a>
                    </li>
                    <li>
                      <a href="">movie1</a>
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
                  <div className="sub-menu-top">
                    <span className="sub-menu-title">Title</span>
                    <button className="menu-close-btn">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <ul>
                    <li>
                      <a href="">company1</a>
                    </li>
                    <li>
                      <a href="">movie1</a>
                    </li>
                    <li>
                      <a href="">movie1</a>
                    </li>
                    <li>
                      <a href="">movie1</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </HeaderMediaQuery.HeaderDesktop>
    </header>
  );
};

export default Header;
