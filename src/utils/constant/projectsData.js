import KhairulUmmah from "../../assets/project_images/khairulUmmah.png";
import GoPaper from "../../assets/project_images/gopaper.png";
import MovieDatabase from "../../assets/project_images/movie_database.png";
import CovidApp from "../../assets/project_images/covid_app.png";

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
      "MySql Workbench",
      "MySQL",
      "XAMPP",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    tag: [
      "JSX",
      "styled.css",
      "Javascript",
      "React.Js",
      "axios",
      "redux",
      "vercel",
    ],
  },
  {
    id: 4,
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
    tag: [
      "JSX",
      "styled.css",
      "Javascript",
      "React.Js",
      "axios",
      "redux",
      "vercel",
    ],
  },
];

export default projectsData;
