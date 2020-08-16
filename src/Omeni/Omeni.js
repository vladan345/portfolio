import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import profile from "./profile.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Omeni.css";
class Omeni extends Component {
  render() {
    return (
      <div className="Omeni">
        <div className="heading">
          <img className="logo" src={logo} alt="logo" onClick="return false" />
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
          <div className="om-content">
            <h1>O meni</h1>
            <div className="om-kartica">
              <div className="profil">
                <img src={profile} alt={profile} />
                <div className="profil-info">
                  <h3>Vladan Marković</h3>
                  <p>Front-end Developer</p>
                  <p>10. 4. 1999.</p>
                </div>
              </div>
              <p className="profil-p">
                Ako vam se svidjaju moji radovi, mozete me kontaktirati preko
                mail-a ili mozete poslati pitanje popunjavanjem polja sa desne
                straneAko vam se svidjaju moji radovi, mozete me kontaktirati
                preko mail-a ili mozete poslati pitanje popunjavanjem polja sa
                desne straneAko vam se svidjaju moji radovi, mozete me
                kontaktirati preko mail-a ili popu straneAko vam se svidjaju
                moji radovi, mozete me kontaktirati preko mail-a ili mozete
                poslati pitanje popunjavanjem polja sa desne straneAko vam se
                svidjaju moji radovi, mozete me kontaktirati preko mail-a ili
                mozete poslati pitanje popunjavanjem polja sa desne straneAko
                vam se svidjaju moji radovi, mozete me kontaktirati preko mail-a
                ili popu strane
              </p>
              <Link to="/kontakt">kontakt</Link>
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

export default Omeni;
