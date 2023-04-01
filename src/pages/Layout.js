import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import InnerContainer from "../Components/Containers/InnerContainer";
import MainHeader from "../Components/Header/MainHeader";
import SVGContainer from "../Components/Containers/SVGContainer";
import ThemeContext from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <Container path={location.pathname}>
        <SVGContainer />
        <InnerContainer>
          <MainHeader title={"My website"} />
        </InnerContainer>
        <Outlet />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Layout;
