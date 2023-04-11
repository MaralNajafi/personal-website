import React from "react";
import GeneralAboutMeBox from "../Components/AboutMeSidebar/AboutMeSidebar";

export default function About() {
  return (
    <div className="about-wrapper d-flex flex-row">
      <GeneralAboutMeBox />
      <div className="about-me">
        <h2>Why I enjoy developing web projects</h2>
        <p>
          I’ve been always known as an empath and a person with interpersonal
          skills enough to be able to see a situation from other people’s point
          of view.{" "}
          <b>
            Figuring out people’s needs and ways to accommodate those needs,
            both in small and large scales, has always been fulfilling to me.
          </b>
        </p>
        <p>
          Also, as a business management graduate I’ve learned the importance of
          prioritizing costumers’ satisfaction and convenience. And{" "}
          <b>web users are no exception</b>.
        </p>
        <p>
          Having my personal traits and professional background in mind, I’m
          constantly thinking and searching to come up with new ideas on how to
          build a more user friendly webapp and website.{" "}
          <b>
            This practice really satisfies my love of creation and innovation.
          </b>
        </p>
        <p>
          <mark>
            The most rewarding experience to me throughout this process is
            programming and implementing features and interactive UIs which make
            users’ lives much easier and willing to enjoy products and services
            provided by the website.
          </mark>
        </p>
        <p>
          The fact that you start your project with least features but ending up
          adding your next 10th feature to{" "}
          <b>
            it really excites me and makes me deeply understand the idea of
            developing.
          </b>{" "}
          What makes it even more interesting is that this process has no end
          and your project grows and improves like a living creature.{" "}
          <i>
            (Actually, in case you want your project to survive this
            fast-changing world!)
          </i>
        </p>
      </div>
    </div>
  );
}
