import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import icon11 from './locat.png';
import icon12 from './mail.png';
import icon13 from './ig.png';
import icon14 from './git.png';
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
                <p>Ako vam se svidjaju moji radovi, mozete me kontaktirati preko mail-a ili mozete postaviti pitanje popunjavanjem polja sa desne strane</p>
              </div>
              <div className="right-col">
                <form>
                  <input type="text" name="ime" required placeholder="Ime" /><br />
                  <input type="email" name="email" required placeholder="E-mail" />
                  <textarea name="poruka" required maxLength="300" placeholder="Poruka (Maksimalno 300 karaktera)" />
                  <input type="submit" value="Pošalji" />
                </form>
              </div>
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
