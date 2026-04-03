import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <div className="relative text-white bg-black">
      <AnimatePresence mode="wait">
        {!isIntroDone && (
          <IntroAnimation
            key="intro"
            onComplete={() => setIsIntroDone(true)}
          />
        )}
      </AnimatePresence>

      {isIntroDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;