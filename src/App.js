import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, NavLink, Redirect} from "react-router-dom";
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
        <Redirect from='/' to='/portfolio' />
        <AnimatePresence>
          <Switch>
            <Route exact path="/portfolio" component={Pocetna} />
            <Route path="/usluge" component={Usluge} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/radovi" component={Radovi} />
            <Route path="/o meni" component={Omeni} />
          </Switch>
          <div className="row">
          {linkovi.map((value, index) => {
          return  <NavLink exact to={"/"+ value} className="links" activeClassName="active" key={index}>{value}</NavLink>
        })}
          </div>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}

export default App;
