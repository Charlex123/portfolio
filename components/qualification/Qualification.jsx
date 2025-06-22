// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';

const Qualification = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Bachelor of Pharmacy</h3>
                <span className="qualification__subtitle">University of Nigeria, Nsukka</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title"> Web Developer Training</h3>
                <span className="qualification__subtitle">Freecode Camp, Youtube</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Python Everywhere</h3>
                <span className="qualification__subtitle">By Cousera</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title"> AWS Certified,  </h3>
                <span className="qualification__subtitle">By Coursera</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Azure Certified </h3>
                <span className="qualification__subtitle">By Cousera</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title"> Cyfrin Blockchain Course</h3>
                <span className="qualification__subtitle">By Cyfrin & Chainlink</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Qualification;