import Hero from "./sections/Hero/Hero";
import "./App.css";
import Projets from "./sections/Projets/Projets";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Projets/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
