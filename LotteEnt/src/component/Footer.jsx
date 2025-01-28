import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>
          <span>
            Lotte Entertainment believes that entertainment has the power
          </span>
          &nbsp;to inspire and connect people from all walks of life.
        </p>
      </div>
      <div className="footer-btm">
        <div className="menu-list">
          <ul>
            <li>
              <button>
                Movie<span></span>
              </button>
              <ul className="sub-menu-list">
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
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <button>
                Company<span></span>
              </button>
              <ul className="sub-menu-list">
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
            </li>
          </ul>
        </div>
        <div className="sns-list">
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
                  size="lg"
                  style={{color: "#fff"}}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-info-list">
          <p>
            Address :&nbsp;
            <span>
              18F, 295, Olympic-ro, Songpa-gu, Seoul, 05510, Republic of Korea
            </span>
          </p>
          <p>
            By Subway :&nbsp;<span>Line 2 Jamsil Station Exit #8 </span>
          </p>
          <p>
            Email :&nbsp;<span>international02@lotte.net</span>
          </p>
          <p>©2024 LOTTE ENTERTAINMENT ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
