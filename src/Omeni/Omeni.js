import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Omeni.css";
class Omeni extends Component {
  render() {
    return (
      <motion.div 
      exit={{opacity: 0}}
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{duration: 1}}>
      <div className="Omeni">
        <div className="heading">
          <img className="logo" src={logo} alt="logo" />
          <div className="headers">
            <h1>VLADAN MARKOVIĆ</h1>
            <h2>FRONT-END DEVELOPER</h2>
          </div>
        </div>
        <h1>Ja sam zirko hrastic, hvala</h1>
        <Link to="/portfolio" className="arrow">
            <img src={arrow} alt={arrow} />
        </Link>
      </div>
      </motion.div>
    );
  }
}

export default Omeni;
