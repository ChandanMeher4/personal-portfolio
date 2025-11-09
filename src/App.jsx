import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./sections/home.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/projects.jsx";
import Skills from "./sections/skills.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import IntroAnimation from "./components/introAnimation.jsx";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <div className="relative gradient text-white">
      {!isIntroDone && (
        <IntroAnimation
          onComplete={() => {
            setIsIntroDone(true);
          }}
        />
      )}

      {isIntroDone && (
        <div>
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;