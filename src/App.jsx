import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

export default App;
