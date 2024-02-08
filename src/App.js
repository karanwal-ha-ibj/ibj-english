import Home from "./Pages/Home";
import Appbar from "./Components/Appbar";
// import Gsap from "./Components/Gsaptest";
import './App.css';
import IBJthought from "./Components/IBJthought";

function App() {
  return (
    <>
      <div>
        <Appbar />
        <IBJthought/>
        <Home />
        {/* <Gsap/> */}
      </div>
    </>
  );
}

export default App;
