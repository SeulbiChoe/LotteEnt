import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Header = () => {
  return (
    <header className="header">
      <Mobile>
        <div>children mobile</div>
      </Mobile>

      {/* <Tablet>Tablet</Tablet> */}
      <Desktop>Desktop or laptop</Desktop>
    </header>
  );
};

export default Header;
