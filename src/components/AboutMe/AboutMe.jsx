import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About-Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          Currently my activity is volunteering at an orphanage in my
          neighborhood called Khairul Ummah and being the administrator of the
          orphanage, if I have time I develop the orphanage website
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://github.com/ilahgun/khairul-ummah"}
            target="_blank"
          >
            {" "}
            Khairul Ummah
          </Link>{" "}
          to provide information about the orphanage, manage orphanage data and
          become a platform for donating to the orphanage where I volunteer.
          Apart from that I am also actively exploring the latest technologies,
          because I believe that technology continues to develop. Therefore I am
          ready to continue to develop and contribute in the field of
          programming with enthusiasm and dedication.
        </p>
        <p className="mb-4">
          Although I am a full-stack web developer, my focus is more on
          Front-end because I am not confident in my ability to create database
          designs (unless there is already a database design :p).
        </p>
        <p className="mb-4">
          I use my free time to refresh by playing games and watching movies, if
          I am lazy to play games and watch movies I use my free time to
          sleep...
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
