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
          <div className="om-content">
            <h1>O meni</h1>
            <div className="om-kartica">
              <div className="profil">
                <img src={profile} alt={profile} />
                <div className="profil-info">
                  <h3>Vladan Marković</h3>
                  <p>Front-end Developer</p>
                  <p>21 godina</p>
                </div>
              </div>
              <p className="profil-p">
              Programer sam iz Beograda i u slobodno vreme volim da kuvam i bavim se muzikom. Prvi sajt koji sam napravio bio je za bend u kom sviram bubnjeve.
              Front-end developmentom se bavim dve godine i za to vreme sam učio različite alate za izradu veb sajtova. Vreme mi je uglavnom odlazilo na učenje tih tehnologija i zbog toga su mi svi projekti koje do sada imam nastali za vreme obrazovanja u IT školi (ITS). Cenim tačnost i preciznost u svojim radovima, volim rešavati probleme, te ako dođe do ikakvih prepreka, sa zadovoljstvom ću se suočiti sa njima. Ako vam se sviđaju moji radovi, sa mnom možete stupiti u kontakt preko mejla ili poslati pitanje popunjavanjem polja na kontakt stranici.
              </p>
              <Link to="/radovi">pogledajte radove</Link>
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
