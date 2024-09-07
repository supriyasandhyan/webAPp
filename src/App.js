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
        <Route path="/fiction" element={<FictionBookCards topic="fiction"/>} />
        <Route path="/drama" element={<DramaBookCards topic="drama"/>} />
        <Route path="/humour" element={<HumourBookCards topic="humour"/>} />
        <Route path="/politics" element={<PoliticsBookCards topic="politics"/>} />
        <Route path="/philosophy" element={<PhilosophyBookCards topic="philosophy"/>}/>
        <Route path="/history" element={<HistoryBookCards topic="history"/>}/>
        <Route path="/adventure" element={<AdventureBookCards topic="adventure"/>}/>
      </Routes>
    </>
  );
};

export default App;
