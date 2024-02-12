import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services"
import Portfolio from "./components/Portfolio";
import ContactProyect from "./components/contactProyect";
import Testimonios from "./components/Testimonios";




function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills/>
      <Qualification/>
      <Services/>
      <Portfolio/>
      <ContactProyect/>
      <Testimonios/>
    </>
  );
}

export default App;
