import React from "react";
import InnerContainer from "../InnerContainer";
import ShowcaseInfo from "../SideBars/ShowcaseInfo";

export default function Showcase() {
  return (
    <InnerContainer className="inner-container">
      <div className="showcase d-grid">
        <ShowcaseInfo
          explanation={
            " Creating, using computer tools, has always been my number 1 passion. I was a senior business management student when I was first introduced to front-end web development. A journey to create, using programming languages!"
          }
        />
      </div>
    </InnerContainer>
  );
}
