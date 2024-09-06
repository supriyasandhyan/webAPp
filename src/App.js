import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import FictionBookCards from "./Pages/FictionBookCards";
import DramaBookCards from "./Pages/DramaBookCards";
import HumourBookCards from "./Pages/HumourBookCards";
import PoliticsBookCards from "./Pages/PoliticsBookCards";
import PhilosophyBookCards from "./Pages/PhilosophyBookCards";
import HistoryBookCards from "./Pages/HistoryBookCards";
import AdventureBookCards from "./Pages/AdventureBookCards";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fiction" element={<FictionBookCards />} />
        <Route path="/drama" element={<DramaBookCards />} />
        <Route path="/humour" element={<HumourBookCards />} />
        <Route path="/politics" element={<PoliticsBookCards />} />
        <Route path="/philosophy" element={<PhilosophyBookCards/>}/>
        <Route path="/history" element={<HistoryBookCards/>}/>
        <Route path="/adventure" element={<AdventureBookCards/>}/>
      </Routes>
    </>
  );
};

export default App;
