import "./style/App.scss";
import "./style/ScrollBar.scss";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" Component={Home} />
          <Route path="about" Component={About} />
          <Route path="contact" Component={Contact} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
