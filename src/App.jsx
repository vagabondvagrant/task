import Footer from "./components/Footer";
import HelpSupport from "./components/HelpSupport";
import Helpline from "./components/Helpline";
import { LookOut } from "./components/LookOut";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-2">
        <Helpline />
      </div>
      <div className="mt-2">
        <HelpSupport/>
      </div>
        <LookOut />
      <Footer/>
    </>
  );
}

export default App;
