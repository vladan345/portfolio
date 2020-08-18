import React, { Component } from "react";
import logo from "../logo.png";
import "./Pocetna.css";
import { motion } from "framer-motion";
class Pocetna extends Component {
  render() {
    return (
      <div>
      <motion.div 
      exit={{opacity: 0}}
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{duration: 1}}>
      <div className="Pocetna">
        <div className="header">
          <h1>VLADAN MARKOVIĆ</h1>
          <h2>FRONT-END DEVELOPER</h2>
          <img src={logo} alt="logo" />
        </div>
      </div>
      </motion.div>
      <p className="copyright">&copy; 2020 Vladan Marković | Sva prava rezervisana</p>
      </div>
    );
  }
}

export default Pocetna;
