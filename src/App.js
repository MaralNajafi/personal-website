import "./style/App.css";
import "./style/ScrollBar.css";
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
          <Route index path="/personal-website/" Component={Home} exact />
          <Route path="/personal-website/about" Component={About} />
          <Route path="/personal-website/contact" Component={Contact} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
