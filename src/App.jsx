import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualifications from "./components/Qualifications/Qualifications";
import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
