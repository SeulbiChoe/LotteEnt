import {useState} from "react";
import NavContainer from "./NavContainer";
import {useMediaQuery} from "react-responsive";
// import MediaQuery from "../mediaQuery";

const Header = () => {
  const isMobile = useMediaQuery({maxWidth: 1023});
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {isMobile ? (
        <>
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
            <div className="mo-gnb-container">
              <NavContainer />
            </div>
            <div className="sns-wrap">
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <div className="dt-nav-container">
          <nav className="dt-gnb">
            <h1 className="logo">
              <a href=""></a>
            </h1>
            <NavContainer />
            {/* <ul className="dt-gnb-wrap">
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
            </ul> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
