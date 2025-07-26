import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-26">{children}</main>
  </>
);

export default Layout;
