import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, NavLink} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Usluge from "./Usluge/Usluge";
import Radovi from "./Radovi/Radovi";
import Kontakt from "./Kontakt/Kontakt";
import Omeni from "./Omeni/Omeni";
import Pocetna from "./Pocetna/Pocetna";

class App extends Component {
  render() {
    
    const linkovi = ['usluge', 'radovi', 'kontakt', 'o meni'];

    return (
      <div className="App">
        <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/portfolio" component={Pocetna} />
            <Route path="portfolio/usluge" component={Usluge} />
            <Route path="portfolio/kontakt" component={Kontakt} />
            <Route path="portfolio/radovi" component={Radovi} />
            <Route path="portfolio/o meni" component={Omeni} />
          </Switch>
          <div className="row">
          {linkovi.map((value, index) => {
          return  <NavLink exact to={"portfolio/"+ value} className="links" activeClassName="active" key={index}>{value}</NavLink>
        })}
          </div>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}

export default App;
