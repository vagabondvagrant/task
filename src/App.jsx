import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Helpline from './components/Helpline';
import HelpSupport from './components/HelpSupport';
import ToolKit from './Routing/ToolKit';
import Footer from './components/Footer';
import Home from './components/Home';
import HelpSup from './Helper/HelpSup';
import LookingRend from './components/LookingRend';
import OurCommitment from './components/OurCommitme';
import FirstFooter from './components/FirstFooter';
import Budget from './Calculator/Budget';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-commitment" element={<OurCommitment/>}/>
          <Route path="/toolkit" element={<ToolKit />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/lookout" element={<LookingRend />} />
          <Route path="/helpsup" element={<HelpSup/>}/>
          <Route path='/budget' element={<Budget/>}/>
        </Routes>
      </>
      <HelpSupport/>
      <div className='mt-2 mb-2'>
      <FirstFooter/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
