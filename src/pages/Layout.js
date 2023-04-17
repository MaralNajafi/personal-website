import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import MainHeader from "../components/MainHeader/MainHeader";
import MainFooter from "../components/MainFooter/MainFooter";
import SVGContainer from "../components/SVGcontainer/SVGContainer";
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
