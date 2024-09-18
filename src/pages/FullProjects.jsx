import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import FullProject from "../components/FullProject/FullProject";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import FooterMain from "../components/Footer/FooterMain";

const FullProjects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <Layout
        leftContent={
          <>
            <Header />
          </>
        }
        rightContent={
          <>
            <FullProject />
            <FooterMain />
          </>
        }
      />
    </>
  );
};

export default FullProjects;
