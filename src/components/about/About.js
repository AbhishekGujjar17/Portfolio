import React from "react";

import Skillcard from "./../Skillcard";
import { motion } from "framer-motion";
import skills from "./../data/about_data";
import "./about.css";

const About = () => {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        I'm a Computer Science Student with a great interest in solving
        real-world <strong>problems through algorithms.</strong> I'm a <strong> detail-oriented, responsible, and committed developer</strong> who is passionate about
        technology and always have a keen desire to learn new things. I have
        <strong> over 1 year of experience</strong> in defining requirements, designing,
        implementing, testing, and delivering <strong>software applications</strong> using a
        variety of technologies and <strong>programming languages</strong>.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">My technical proficiencies include:</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
