import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import InnerContainer from "../Components/Containers/InnerContainer";
import MainHeader from "../Components/Header/MainHeader";
import SVGContainer from "../Components/Containers/SVGContainer";
import ThemeContext from "../context/ThemeContext";
const Layout = () => {
  return (
    <ThemeContext.Provider value={{theme: "light"}}>
      <Container>
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
