import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Expereience from './Components/Experience';
import Projects from "./Components/Projects";

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Expereience />
            <Projects />
        </div>
    );
}

export default App;
