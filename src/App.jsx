import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDescription/ProjectDetail";
import Layout from "./Layout";
import Contact from "./components/Contact";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Socials />
              <Home />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/project/:projectId"
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
