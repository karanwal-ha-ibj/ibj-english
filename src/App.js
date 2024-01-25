import Home from "./Pages/Home";
import Appbar from "./Components/Appbar";
import Gsap from "./Components/Gsaptest";
import Ibjthought from "./Components/IBJthought";
import './App.css';
import IBJthought from "./Components/IBJthought";

function App() {
  return (
    <>
      <div>
        <Appbar />
        <IBJthought/>
        {/* <Gsap/> */}
        <Home />
      </div>
    </>
  );
}

export default App;
