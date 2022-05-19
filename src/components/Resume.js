import React from "react";

import Bar from "./Bar";
import { motion } from "framer-motion";
import { tools, languages } from "./data/resume_data";

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
              Bachelor of Science in Computer Science and Statistics
            </h5>
            <p className="resume-card__name">
              Memorial University, St. John’s, CANADA
              <strong>
                <br />
                GPA: 3.9
              </strong>
            </p>
            <p className="resume-card__details">
              I am currently persuing Bachelor of Science in Computer Science
              and Statistics from Memorial University of Newfoundland.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience (Latest)</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Software Engineer Intern</h5>
            <p className="resume-card__name">Gao Tek</p>
            <p className="resume-card__details">
              • Developed a Python back-end module for a web application that
              performs data extraction from OCR’ed data of documents.
              <br />• Implemented ways to handle OCR errors and adjust typos by
              using various tools, boosting the performance of data extraction
              by 20%.
              <br />• Implemented various pipelines of extraction for different
              types of documents.
              <br />• Integrated modules and performed integration/end-to-end
              testing.
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
