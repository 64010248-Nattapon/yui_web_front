import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import MateRial from './page/MateRial';
import Incoming from './page/Incoming';
import Submount from './page/Submount';
import Record from './page/Record';
import GoldTin from './page/GoldTin';
import RecordLeader from './page/RecordLeader';
import YieldDaily from './page/YieldDaily';
import Profile from './page/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route สำหรับหน้า Login */}
        <Route path="/" element={<Login />} />
        {/* Route สำหรับหน้า Home */}
        <Route path="/home" element={<Home />} />
        {/* Route สำหรับหน้า MateRial */}
        <Route path="/material" element={<MateRial />} />
        {/* Route สำหรับหน้า Incoming */}
        <Route path="/incoming" element={<Incoming />} />
        {/* Route สำหรับหน้า Submount */}
        <Route path="/submount" element={<Submount />} />
        {/* Route สำหรับหน้า Record */}
        <Route path="/record" element={<Record />} />
        {/* Route สำหรับหน้า Gold-Tin */}
        <Route path="/goldtin" element={<GoldTin />} />
        {/* Route สำหรับหน้า RecordLeader */}
        <Route path="/recordleader" element={<RecordLeader />} />
        {/* Route สำหรับหน้า YieldDaily */}
        <Route path="/yielddaily" element={<YieldDaily />} />
        {/* Route สำหรับหน้า Profile */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;