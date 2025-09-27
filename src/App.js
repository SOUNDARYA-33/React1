import React from "react";
import "./App.css";
import Header from "./component/header";
import Hero from "./component/hero";
import Blog from "./component/blog";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
