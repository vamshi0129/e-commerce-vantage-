import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Electronics from './electronics';
import Clothes from './clothing';
import Toys from './toys';
import Footwear from './footwear';
import PetCare from './pet';
import BeautyPicks from './beauty';
import Furniture from './furniture';
import Healthcare from './health';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothes />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/petcare" element={<PetCare />} />
        <Route path="/beautypicks" element={<BeautyPicks />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/healthcare" element={<Healthcare />} />
      </Routes>
    </Router>
  );
};

export default App;
