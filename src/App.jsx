import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills"

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </div>
    );
}

export default App;
