import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" index element={<Destination />} />
          <Route path="crew" index element={<Crew />} />
          <Route path="technology" index element={<Technology />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
