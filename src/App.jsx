import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Socials />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
