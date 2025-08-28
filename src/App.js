import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 페이지 컴포넌트들 import
import Home from './pages/Home';
import GolfCart from './pages/GolfCart';
import Forklift from './pages/Forklift';
import TwelveVStart from './pages/12VStart';
import BESS from './pages/BESS';
import HESS from './pages/HESS';
import PowerBank from './pages/PowerBank';
import CampingCar from './pages/CampingCar';
import Cell from './pages/Cell';
import Charger from './pages/Charger';
import Support from './pages/Support';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/golfcart" element={<GolfCart />} />
            <Route path="/forklift" element={<Forklift />} />
            <Route path="/12vstart" element={<TwelveVStart />} />
            <Route path="/bess" element={<BESS />} />
            <Route path="/hess" element={<HESS />} />
            <Route path="/powerbank" element={<PowerBank />} />
            <Route path="/campingcar" element={<CampingCar />} />
            <Route path="/cell" element={<Cell />} />
            <Route path="/charger" element={<Charger />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
