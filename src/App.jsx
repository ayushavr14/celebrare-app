import { useState } from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="mx-auto max-w-[1200px] font-lora">
      <Header />
      <Home />
      <Feature />
    </div>
  );
}

export default App;
