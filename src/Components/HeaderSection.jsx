import React from "react";
import MainHeader from "./MainHeader";
import Showcase from "./Showcase";

export default function HeaderSection() {
  return (
    <section className="header-section">
      <div className="inner-container">
        <MainHeader title={"my website"} />
        <Showcase />
      </div>
    </section>
  );
}
