import React, { useState } from "react";
import destinationsData from "@assets/data.json";
import "./Destination.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Destination = () => {
  return (
    <motion.section
      className="destination section-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="destination__inner main-sub-heading">
          <span className="brown-bold-text">01</span> Pick your destination
        </div>
        <div className="destination__wrapper">
          <Tabs variant="unstyled">
            <TabList className="destination__tab-list">
              {destinationsData.destinations.map((item, index) => (
                <Tab
                  key={index}
                  className="destination__tab-button"
                  _selected={{ borderBottom: "3px solid #fff" }}
                >
                  {item.name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {destinationsData.destinations.map((item, index) => (
                <TabPanel key={index}>
                  <div className="destination__body">
                    <div className="destination__image">
                      <img
                        src={require(`../../assets/img/destination/${item.images}`)}
                      />
                    </div>
                    <div className="destination__text">
                      <h2 className="destination__title lg-title">
                        {item.name}
                      </h2>
                      <p className="destination__desc body-text">
                        {item.description}
                      </p>
                      <hr />
                      <div className="destination__footer-text">
                        <div className="destination__more-info">
                          <p>AVG. DISTANCE</p>
                          <h6>{item.distance}</h6>
                        </div>
                        <div className="destination__more-info">
                          <p>Est. travel time</p>
                          <h6>{item.travel}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </motion.section>
  );
};

export default Destination;
