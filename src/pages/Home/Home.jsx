import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  return (
    <motion.section
      className="home section-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="home__wrapper">
          <motion.div
            className="home__body"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="home__sub-title xs-title">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="home__title main-title">SPACE</h1>
            <p className="home__desc body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </motion.div>
          <Link className="home__button" to="destination">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              EXPLORE
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
