import { Outlet } from "react-router-dom";
import Container from "../Components/Container";
import InnerContainer from "../Components/InnerContainer";
import MainHeader from "../Components/MainHeader";
import SVG from "../Components/SVG";
const Layout = () => {
  return (
    <Container>
      <SVG />
      <InnerContainer>
        <MainHeader title={"My website"} />
      </InnerContainer>
      <Outlet />
    </Container>
  );
};

export default Layout;
