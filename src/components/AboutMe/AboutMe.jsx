import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          Currently, I work at
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://happyplayindonesia.com"}
            target="_blank"
          >
            {" "}
            Happy Play Indonesia
          </Link>{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://happyplayindonesia.com/our-company/"}
            target="_blank"
          >
            {" "}
            (PT. Inovasi Wahana Anak Indonesia)
          </Link>{" "}
          , and at Happy Play I work in the Digital Marketing division as a{" "}
          <b>Web Developer</b>. In addition to developing the web, I also work
          on other things such as creating automation using Imacross, becoming a
          Zoom operator, and others.
        </p>
        <p className="mb-4">
          When I'm at home or on vacation, I also actively explore the latest
          technologies, because I believe technology continues to develop.
          Therefore, I am ready to continue to develop and contribute to the
          field of programming, especially <b>Web Development</b> with
          enthusiasm and dedication.
        </p>
        <p className="mb-4">
          Although I am a full-stack web developer, my focus is more on the
          front end because I am less confident in my ability to create database
          designs (unless there is already a database design :p).
        </p>
      </div>

      {/* Next time... */}
      {/* <div className="font-bold text-lg text-slate-400">
        const <span className="text-amber-200">AboutMe</span> ={" "}
        <span className="text-amber-500">{"{ "}</span>`
        <br />
        <p className="ml-4 font-normal text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          corporis dolore nihil voluptatem quas cupiditate dolorum sit numquam
          labore? Blanditiis libero hic soluta nobis. Itaque in officia
          repudiandae illo aliquam?
        </p>
        `<span className="text-amber-500">{"}"}</span>;
      </div> */}
    </section>
  );
};

export default AboutMe;
