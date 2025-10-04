import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Expereience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-900 dark:bg-gray-200 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expereience />
      <Projects />
      <Education />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
