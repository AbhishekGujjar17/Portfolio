import React from "react";

import Bar from "./Bar";
import { motion } from "framer-motion";
import { tools, languages } from "./data/resume_data";
import code from "../assets/projects_images/code.gif"

const Resume = () => {
  const resume_variants = {
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
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Bachelor of Science in Computer Science (Honours)
            </h5>
            <p className="resume-card__name">
              Memorial University, St. John’s, CANADA
              <strong>
                <br />
                GPA: 3.9
              </strong>
            </p>
            <img class = "rounded mx-auto d-block"  src={code} alt="code" width="300" height="200"></img>
            <p className="resume-card__details mt-1">
              I am currently pursuing Bachelor of Science in <strong>Computer Science (Honours) </strong> from Memorial University of Newfoundland.
            </p>
            
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience (Latest)</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Software Engineer Intern</h5>
            <a className = "resume-card__name" rel="noopener noreferrer" target="_blank" href= "https://www.pragmaclin.com/">PragmaClin Research Inc.</a>
            <p className="resume-card__details">
              • Worked with depth-sensing cameras to track hand and body measurements with Python.
              <br />• Used JavaFx to make changes in the current GUI of the software.
              <br />• Developed Frontend component of the software using ReactJs and Syncfusion API.
              <br />• Managed and modified the database using SQLite.
              <br />• Debugged and modified software components.
              <br /> <br/> <strong>Skills: </strong> Artificial Intelligence · JavaFx · ReactJs · OpenCv · SQLite · Java · Python · JavaScript
            </p>
           
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Programming Languages</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">
            Frameworks and Technologies
          </h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
