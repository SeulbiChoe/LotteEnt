import {useState} from "react";
import NavContainer from "./NavContainer";
import {useMediaQuery} from "react-responsive";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
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
                  <a
                    href="https://www.instagram.com/lotteent.movie/"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="xl"
                      style={{color: "#fff"}}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@lotteent" target="_blank">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="xl"
                      style={{color: "#fff"}}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/lotteent.movie/?locale=ko_KR"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="xl"
                      style={{color: "#fff"}}
                    />
                  </a>
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
