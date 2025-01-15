import {useMediaQuery} from "react-responsive";

const HeaderDesktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: 1024});
  return isDesktop ? children : null;
};
const Tablet = ({children}) => {
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023});
  return isTablet ? children : null;
};
const HeaderMobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 1023});
  return isMobile ? children : null;
};
const Mobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 1023});
  return isMobile ? children : null;
};

export default {HeaderMobile, Tablet, HeaderDesktop, Mobile};
