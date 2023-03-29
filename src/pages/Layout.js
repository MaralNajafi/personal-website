import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import InnerContainer from "../Components/Containers/InnerContainer";
import MainHeader from "../Components/Header/MainHeader";
import SVGContainer from "../Components/Containers/SVGContainer";
const Layout = () => {
  return (
    <Container>
      <SVGContainer />
      <InnerContainer>
        <MainHeader title={"My website"} />
      </InnerContainer>
      <Outlet />
    </Container>
  );
};

export default Layout;
