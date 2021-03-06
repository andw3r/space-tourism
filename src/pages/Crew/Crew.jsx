import React from "react";
import crewData from "@assets/data.json";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./Crew.scss";
import { motion } from "framer-motion";

const Crew = () => {
  return (
    <motion.section
      className="crew section-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="crew__inner main-sub-heading">
          <span className="brown-bold-text">02</span> Meet your crew
        </div>
        <div className="crew__wrapper">
          <Tabs variant="unstyled">
            <TabPanels>
              {crewData.crew.map((item) => (
                <TabPanel>
                  <div className="crew__body">
                    <div className="crew__text">
                      <h6 className="crew__role">{item.role}</h6>
                      <h2 className="crew__title md-title">{item.name}</h2>
                      <p className="crew__desc body-text">{item.bio}</p>
                    </div>

                    <div className="crew__image">
                      <img src={require(`@assets/img/crew/${item.images}`)} />
                    </div>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>

            <TabList className="crew__tab-list">
              {crewData.crew.map(() => (
                <>
                  <Tab
                    className="crew__tab-button"
                    _selected={{ opacity: 1 }}
                  ></Tab>
                </>
              ))}
            </TabList>
          </Tabs>
        </div>
      </div>
    </motion.section>
  );
};

export default Crew;
