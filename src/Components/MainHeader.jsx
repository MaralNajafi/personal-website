import React from "react";
import Me from "./Me";
import MainNav from "./MainNav";

export default function MainHeader() {
  return (
    <header className="main-header d-flex jc-space-between ai-center">
      <Me name={"maral najafi"} position={"front end developer"} />
      <MainNav />
    </header>
  );
}
