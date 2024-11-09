import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import FullProjects from "./pages/FullProjects";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import NotFound from "./pages/NotFound";

import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const App = () => {
  return (
    <>
      <head>
        <meta
          name="google-site-verification"
          content="ERKllSAZ7_48bn1Ux4esIUmhC9NrPqdFhLXX0eZ8YJk"
        />
      </head>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<FullProjects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
library.add(fab, fas, far);
