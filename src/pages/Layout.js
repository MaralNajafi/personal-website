import { Outlet } from "react-router-dom";
import Container from "../Components/Containers/Container";
import MainHeader from "../Components/Header/MainHeader";
import MainFooter from "../Components/Footer/MainFooter";
import SVGContainer from "../Components/Containers/SVGContainer";
import ThemeContext from "../context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <Container>
        <ToastContainer position="top-right" />
        <SVGContainer />
        <MainHeader title={"My website"} />
        <Outlet />
        <MainFooter />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Layout;
