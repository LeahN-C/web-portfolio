import React from 'react';
import Socials from './components/Socials';
import Header from "./components/Header";
import About from './components/About';
import Projects from "./components/Projects";
import Resume from './components/Resume';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";

function App() {
  // Tab title
  document.title = "Leah's Portfolio";

  return (
    <div className="App">

      <Socials />

      <Header />

      <About />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
