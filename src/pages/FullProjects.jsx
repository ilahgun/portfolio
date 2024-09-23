import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import FullProject from "../components/FullProject/FullProject";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import FooterMain from "../components/Footer/FooterMain";
import HeaderPro from "../components/Header/HeaderPro";

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
            <HeaderPro />
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
