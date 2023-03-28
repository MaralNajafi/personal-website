import { Outlet } from "react-router-dom";
import Container from "../Components/Container";
import InnerContainer from "../Components/InnerContainer";
import MainHeader from "../Components/MainHeader";
const Layout = () => {
  return (
    <Container>
      <InnerContainer>
        <MainHeader title={"My website"} />
      </InnerContainer>
      <Outlet />
    </Container>
  );
};

export default Layout;
