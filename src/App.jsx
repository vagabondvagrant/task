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
        <LookOut />
    </>
  );
}

export default App;
