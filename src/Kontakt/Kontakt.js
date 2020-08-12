import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";
import "./Kontakt.css";
import { motion } from "framer-motion";
class Kontakt extends Component {
  render() {
    return (
      <motion.div 
      exit={{opacity: 0}}
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{duration: 1}}>
      <div className="Kontakt">
        <div className="heading">
          <img className="logo" src={logo} alt="logo" />
          <div className="headers">
            <h1>VLADAN MARKOVIĆ</h1>
            <h2>FRONT-END DEVELOPER</h2>
          </div>
        </div>

        <Link to="/portfolio" className="arrow">
            <img src={arrow} alt={arrow} />
        </Link>
      </div>
      </motion.div>
    );
  }
}

export default Kontakt;
