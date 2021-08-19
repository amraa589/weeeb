import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import MemberSlide from "./components/memberSlide";
import OurMemory from "./components/ourMemory";
import Footer from "./components/footer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <MemberSlide/>
      <OurMemory/>
      <Footer/>
    </div>
  );
}

export default App;
