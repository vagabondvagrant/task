// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Helpline from './components/Helpline';
// import HelpSupport from './components/HelpSupport';
// import LookingOut from './Routing/LookingOut';
// import ToolKit from './Routing/ToolKit';
// import ProtectingMinors from './Routing/ProtectingMinors';
// import { LookOut } from './components/LookOut';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <>
//         <NavBar />
//         <Routes>
//           <Route path="/looking-out" element={<LookingOut />} />
//           <Route path="/toolkit" element={<ToolKit />} />
//           <Route path="/protecting-minors" element={<ProtectingMinors />} />
//         </Routes>
//         <div className="mt-2">
//           <Helpline />
//         </div>
//         <div className="mt-2">
//           <HelpSupport />
//         </div>
//         <LookOut />
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Helpline from './components/Helpline';
import HelpSupport from './components/HelpSupport';
import LookingOut from './Routing/LookingOut';
import ToolKit from './Routing/ToolKit';
import ProtectingMinors from './Routing/ProtectingMinors';
import { LookOut } from './components/LookOut';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/looking-out" element={<LookingOut />} />
          <Route path="/toolkit" element={<ToolKit />} />
          <Route path="/protecting-minors" element={<ProtectingMinors />} />
          {/* Add Route for Helpline */}
          <Route path="/helpline" element={<Helpline />} />
          {/* Add Route for HelpSupport */}
          <Route path="/help-support" element={<HelpSupport />} />
          {/* Add Route for LookOut */}
          <Route path="/lookout" element={<LookOut />} />
          {/* Add Route for Footer */}
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
