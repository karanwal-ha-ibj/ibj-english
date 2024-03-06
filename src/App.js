import Home from "./Pages/Home";
import Appbar from "./Components/Appbar";
// import Gsap from "./Components/Gsaptest";
import './App.css';
import IBJthought from "./Components/IBJthought";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div style={{overflow:"hidden"}}>
        <Appbar />
        <IBJthought/>
        <Home />
        <Footer/>
        {/* <Gsap/> */}
      </div>
    </>
  );
}

export default App;
