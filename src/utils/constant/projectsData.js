import BeMot from "../../assets/BeMot.png";
import KhairulUmmah from "../../assets/khairulUmmah.png";
import SimPeg from "../../assets/simpeg.png";
import GoPaper from "../../assets/gopaper.png";
import Padlock from "../../assets/padlock.png";
import MovieDatabase from "../../assets/movie_database.png";
import CovidApp from "../../assets/covid_app.png";

const projectsData = [
  {
    id: 1,
    title: "Rumah Yatim Khairul Ummah",
    category: "Web",
    desc: "an orphanage website that manages data and provides information and is a donation platform for the Khairul Ummah orphanage.",
    img: KhairulUmmah,
    link: "https://github.com/ilahgun/khairul-ummah",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Laravel",
      "Bootstrap",
      "Postman",
      "MySQL",
      "XAMPP",
    ],
  },
  {
    id: 2,
    title: "BeMot",
    category: "Web",
    desc: "BeMot is a web application for managing a workshop by providing workshop information and spare part ordering transactions.",
    img: BeMot,
    link: "https://github.com/ilahgun/BeMot",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Bootstrap",
      "MySql",
      "XAMPP",
      "MySql Workbench",
    ],
  },
  {
    id: 3,
    title: "SIMPEG",
    category: "Web",
    desc: "This is a personnel information system website that manages employee data.",
    img: SimPeg,
    link: "https://github.com/ilahgun/simpeg",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["HTML", "CSS", "Javascript", "PHP", "Bootstrap", "MySql", "XAMPP"],
  },
  {
    id: 4,
    title: "Go Paper",
    category: "Web",
    desc: "a website for managing paper waste, from information on how to utilize paper waste to information on distributing paper waste.",
    img: GoPaper,
    link: "https://github.com/ilahgun/go_paper",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "HTML",
      "CSS",
      "Javascript",
      "React.Js",
      "Express.Js",
      "Tailwind",
      "MySQL",
      "Node.Js",
      "Postman",
    ],
  },
  {
    id: 5,
    title: "Padlock",
    category: "Web",
    desc: "a very interactive boarding house information website that provides location information, boarding house room pictures, facilities, required items and prices so that users can order and directly contact the boarding house owner.",
    img: Padlock,
    link: "https://github.com/ilahgun/padlock",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    id: 6,
    title: "Movie Database",
    category: "Web",
    desc: "a website for movie recommendations and watching trailers by taking the API database from TMDB.",
    img: MovieDatabase,
    link: "https://movie-database-git-main-gunawan050500.vercel.app/",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["JSX", "styled.css", "Javascript", "React.Js", "axios", "vercel"],
  },
  {
    id: 7,
    title: "Covid APP",
    category: "Web",
    desc: "Web application that provides world covid information by consuming world covid data API.",
    img: CovidApp,
    link: "https://frontend-react-js-inky.vercel.app/",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["JSX", "styled.css", "Javascript", "React.Js", "axios", "vercel"],
  },
];

export default projectsData;
