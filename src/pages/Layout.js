import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import MainHeader from "../Components/MainHeader/MainHeader";
import MainFooter from "../Components/MainFooter/MainFooter";
import SVGContainer from "../Components/Containers/SVGContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
      <Container>
        <ToastContainer position="top-right" />
        <SVGContainer />
        <MainHeader title={"My website"} />
        <Outlet />
        <MainFooter />
      </Container>
  );
};

export default Layout;
