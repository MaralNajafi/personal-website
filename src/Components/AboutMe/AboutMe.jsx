import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h2>So, who am I?</h2>
      <p>
        I’m a self-taught front-end web developer who is extremely passionate
        about manipulating programming languages in order to solve problems,
        create and turn new ideas into practical projects.
      </p>
      <h2>My journey:</h2>
      <p>
        I was a <b>senior business management student</b> when I was first
        introduced to Front-end web development. And printing my first "Hello,
        World!", <b>I found my true passion and desire.</b> Back then, I had to
        study both fields, one without any mentors or teachers, and teach{" "}
        <b>as I was an English teacher</b>, too!
      </p>
      <p>
        <b>I resigned as an English teacher</b> after more than 2 years of
        teaching to peruse my ultimate dream job. After successfully{" "}
        <b>graduating from university in 2021</b>, I dedicated all my time to
        become a skillful front-end web developer.
      </p>
      <p>
        During this journey I’ve learned{" "}
        <b>
          how consistency and dedication can beat any obstacles in achieving
          your goals.
        </b>{" "}
        I must note that I wasn’t completely alone during this journey. I mean,
        google, YouTube, stack overflow, JavaScript.info and so many other
        websites and documentations were right by my side helping me fulfill my
        dream and not giving up when facing challenging situations.{" "}
        <mark>
          Self-learning highly boosted my self-confidence as I found myself
          capable of taking risks and growing as an independent individual.
        </mark>
      </p>

      <p>
        <b>Being a fast-learner,</b> helps me satisfy my urge to learn and
        discover more about web development and programming. And my curios mind
        has never disappointed me in coming up with new questions and topics to
        learn about. Most of it’s questions start with “What if …?” and “How is
        it possible to …?” and{" "}
        <b>thanks to all these questions I always have new challenges.</b>
      </p>
      <h2>Courses:</h2>
      <p>
        I took <mark>Harvard sc50 online course</mark> in order to get a deep
        understanding of what is happening under the hood of programming. And
        lately, I decided to take part in a <mark>Front-end bootcamp</mark>,
        which was a great decision, as I was almost getting frustrated after one
        year of not having a mentor guiding me and lighting up the way. Joining
        this bootcamp, I found a great community of developers from any levels
        of proficiency who are all willing to help and grow. I learned a lot
        from my mentor{" "}
        <Link
          to={"https://ehsangazar.com/?gi=79d5ae14e725"}
          className="td-underline"
        >
          Ehsan Gazar
        </Link>
        . He always challenges my skills and most importantly he helped me
        overcome my fear of building projects that require skills I haven’t
        learned completely. He also{" "}
        <b>
          taught me how to integrate all my skills in order to build real
          projects.
        </b>{" "}
      </p>
      <p>
        Working with different libraries and APIs beside constantly being
        introduced to useful resources and technologies are what I found really
        helpful during this bootcamp.
      </p>
      <h2>Why I enjoy developing web projects:</h2>
      <p>
        I’ve been always known as an empath and a person with interpersonal
        skills enough to be able to see a situation from other people’s point of
        view.{" "}
        <b>
          Figuring out people’s needs and ways to accommodate those needs, both
          in small and large scales, has always been fulfilling to me.
        </b>
      </p>
      <p>
        Also, as a business management graduate, I’ve learned the importance of
        prioritizing costumers’ satisfaction and convenience. And{" "}
        <b>web users are no exception</b>.
      </p>
      <p>
        Considering my personal traits and professional background, I’m
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
        Besides, The fact that you start your project with a few features but
        ending up adding your next 10th feature to it{" "}
        <b>
          really excites me and makes me literally understand the idea of
          developing.
        </b>{" "}
        What makes it even more interesting is that this process is endless and
        your project grows and improves like a living creature.{" "}
        <i>
          (Actually, in case you want your project to survive this fast-changing
          world!)
        </i>
      </p>
    </div>
  );
}
