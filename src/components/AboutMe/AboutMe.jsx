import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About Me"} />
      <div className="font-normal text-md">
        {/*<p className="mb-4">
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
        </p>*/}
        <p className="mb-4">
          I am a Full-stack Web Developer with more than 2 years of experience
          in developing, maintaining, and optimizing websites and web
          applications. Throughout my journey, I have worked with technologies
          such as WordPress, React.js, Node.js, Express.js, and Laravel to build
          responsive and user-friendly digital solutions. I also have experience
          in SEO optimization, API integration, and collaborating on development
          projects using GitHub.
        </p>
        <p className="mb-4">
          Outside of professional work, I actively explore new technologies and
          web development trends to continuously improve my skills and stay up
          to date with industry standards. I enjoy turning ideas into functional
          web applications and am always eager to learn, grow, and contribute to
          meaningful projects. Although I have experience across both frontend
          and backend development, I am particularly interested in creating
          intuitive user interfaces and delivering great user experiences.
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
