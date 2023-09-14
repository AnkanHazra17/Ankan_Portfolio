import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Projects from "./components/Projects";



function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary relative overflow-y-hidden">
        <div className="bg-hero-pattern bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>

        <div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Projects></Projects>
          <Feedback></Feedback>
        </div>
        

        <div>
          <Contact></Contact>
          {/* <StarsCanvas></StarsCanvas> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
