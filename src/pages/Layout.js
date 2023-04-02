import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import MainHeader from "../Components/Header/MainHeader";
import MainFooter from "../Components/Footer/MainFooter";
import SVGContainer from "../Components/Containers/SVGContainer";
import ThemeContext from "../context/ThemeContext";
const Layout = () => {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <Container>
        <SVGContainer />
        <MainHeader title={"My website"} />
        <Outlet />
        <MainFooter />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Layout;
