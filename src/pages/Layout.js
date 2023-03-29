import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import InnerContainer from "../Components/Containers/InnerContainer";
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
