// src/app.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Centrahome from './pages/centrahome';
import NewBatchFirst from './pages/newbatchstart';
import MCentraAddWet from './pages/newbatchaddwet';
import MCentraAddDry from './pages/newbatchdryleaves';
import MCentraAddPowdered from './pages/newbatchaddpowder';
import MCentraNewBatchDetails from './pages/newbatchdetails';
import MCentraShipmentConfirmed from './pages/newbatchconfirmed';
import OngoingBatches from './pages/ongoingbatches';
import BatchHistory from './pages/batchhistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/centrahome" element={<Centrahome />} />
        <Route path="*" element={<Navigate to="/centrahome" />} />
        <Route path="/" element={<Centrahome />} />
        <Route path="/newbatch1" element={<NewBatchFirst />} />
        <Route path="/newbatch2" element={<MCentraAddWet />} />
        <Route path="/newbatch3" element={<MCentraAddDry />} />
        <Route path="/newbatch4" element={<MCentraAddPowdered />} />
        <Route path="/newbatch5" element={<MCentraNewBatchDetails />} />
        <Route path="/newbatch6" element={<MCentraShipmentConfirmed />} />
        <Route path="/ongoingbatch" element={<OngoingBatches />} />
        <Route path="/batchhist" element={<BatchHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
