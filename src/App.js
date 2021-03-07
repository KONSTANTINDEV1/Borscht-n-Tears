import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LiveMusic from "./components/pages/LiveMusic.js";
import FoodAndDrink from "./components/pages/FoodAndDrink";
import Shisha from "./components/pages/Shisha";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="body">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shisha" component={Shisha} />
          <Route path="/about" component={About} />
          <Route path="/live-music" component={LiveMusic} />
          <Route path="/food-and-drink" component={FoodAndDrink} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
