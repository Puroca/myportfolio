import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";
import Welcome from "./Welcome";

const HomePage = () => {
    return (
        <div className="max-w-full">
            <Welcome />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
}

export default HomePage;