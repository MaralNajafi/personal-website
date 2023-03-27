import React from "react";
import MainNav from "./MainNav";

export default function MainHeader({title}) {
  return (
    <header className="main-header d-flex jc-space-between ai-center">
      <h1>{title}</h1>
      <MainNav />
    </header>
  );
}
