import React from "react";
import technologyData from "@assets/data.json";
import "./Technology.scss";
import { motion } from "framer-motion";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Technology = () => {
  return (
    <motion.section
      className="technology section-fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="technology__container">
        <div className="destination__inner main-sub-heading">
          <span className="brown-bold-text">03</span> SPACE LAUNCH 101
        </div>
        <Tabs className="technology__wrapper dekstop-tabs">
          <TabList className="technology__tab-list">
            {technologyData.technology.map((item, index) => (
              <Tab
                _selected={{ background: "#FFFFFF", color: "#0B0D17" }}
                className="technology__tab-button"
              >
                {index + 1}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {technologyData.technology.map((item) => (
              <TabPanel>
                <div className="technology__body">
                  <div className="technology__text">
                    <p className="technology__sub-title">THE TERMINOLOGY…</p>
                    <h2 className="technology__title md-title">{item.name}</h2>
                    <p className="technology__desc body-text">
                      {item.description}
                    </p>
                  </div>

                  <div className="technology__image">
                    <img
                      src={require(`@assets/img/technology/${item.portrait}`)}
                    />
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        <Tabs className="technology__wrapper mobile-tabs">
          <TabList className="technology__tab-list">
            {technologyData.technology.map((item, index) => (
              <Tab
                _selected={{ background: "#FFFFFF", color: "#0B0D17" }}
                className="technology__tab-button"
              >
                {index + 1}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {technologyData.technology.map((item) => (
              <TabPanel>
                <div className="technology__body">
                  <div className="technology__text">
                    <p className="technology__sub-title">THE TERMINOLOGY…</p>
                    <h2 className="technology__title md-title">{item.name}</h2>
                    <p className="technology__desc body-text">
                      {item.description}
                    </p>
                  </div>

                  <div className="technology__image">
                    <img
                      src={require(`@assets/img/technology/${item.landscape}`)}
                    />
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Technology;
