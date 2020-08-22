import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import icon11 from "./locat.png";
import icon12 from "./mail.png";
import icon13 from "./ig.png";
import icon14 from "./git.png";
import { Link } from "react-router-dom";
import "./Kontakt.css";
import { motion } from "framer-motion";
class Kontakt extends Component {
  render() {
    return (
      <div className="Kontakt">
        <div className="heading">
        <Link to="/portfolio">
          <img className="logo" src={logo} alt="logo" onClick="return false" />
          </Link>
          <div className="headers">
            <h1>VLADAN MARKOVIĆ</h1>
            <h2>FRONT-END DEVELOPER</h2>
          </div>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="kon-content">
            <h1>Kontakt</h1>
            <div className="kon-cols">
              <div className="left-col">
                <div className="info">
                  <img src={icon11} alt={icon11} />
                  <p>Beograd, Srbija</p>
                </div>
                <div className="info">
                  <img src={icon12} alt={icon12} />
                  <p>vladan.m@gmail.com</p>
                </div>
                <div className="info">
                  <img src={icon13} alt={icon13} />
                  <p>@vlad_markov</p>
                </div>
                <div className="info">
                  <img src={icon14} alt={icon14} />
                  <p>https://github.com/vladan345</p>
                </div>
                <Link to="/o meni" className="vise">
                  pročitajte više
                </Link>
              </div>
              <div className="right-col">
                <h4>Postavite pitanje</h4>
                <form>
                  <input type="text" name="ime" required placeholder="Ime" />
                  <br />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail"
                  />
                  <textarea
                    name="poruka"
                    required
                    maxLength="300"
                    placeholder="Poruka (Maksimalno 300 karaktera)"
                  />
                  <input type="submit" value="POŠALJI" />
                </form>
              </div>
            </div>
          </div>

          
        </motion.div>
        <Link to="/portfolio" className="arrow">
            <img src={arrow} alt={arrow} />
          </Link>
      </div>
    );
  }
}

export default Kontakt;
