import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import FoodCards from "./components/FoodCards";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <FoodCards/>
    </div>
  );
}

export default App;
