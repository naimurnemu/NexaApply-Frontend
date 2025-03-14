import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/common";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
