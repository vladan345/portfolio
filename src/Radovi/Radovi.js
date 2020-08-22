import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import screen1 from "./screen1.png";
import screen2 from "./screen2.png";
import screen3 from "./screen3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Radovi.css";
import Carousel from "react-img-carousel";

class Radovi extends Component {
  render() {
    const settings = {
      width: "100%",
      height: "100%",
      cellPadding: 5,
      alignItems: "center",
    };
    return (
      <div className="Radovi">
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
          <div className="radovi-cont">
            <h1>Radovi</h1>
            <div className="radovi-slider">
              <Carousel {...settings}>
                <div className="rad">
                  <img src={screen1} alt={screen1} />
                  <a
                    href="https://vladan345.github.io/MaeraOfficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    idite na sajt
                  </a>
                  <div className="rad-opis">
                    <p>
                      <em>Maera</em> je bend iz Beograda koji nije imao
                      kako da prikaže svoj identitet osim svojom Facebook i Instagram
                      stranicom i to je bila tema mog prvog većeg projekta kao i zadatak u školi koju pohađam.
                      Cilj je bio da se uradi front-end sajta služeći se osnovnim
                      jezicima za izradu veb sajta (HTML, CSS i Javascript).
                    </p>
                    <p>
                      Radeći na ovom projektu savladao sam HTML, CSS i naučio dosta
                      korisnih stvari iz Javascript-a da bi sajt bio što više
                      interaktivan jer se tako izdvaja od mnogih drugih.
                    </p>
                  </div>
                </div>
                <div className="rad">
                  <img src={screen2} alt={screen2} />
                  <a
                    href="https://vladan345.github.io/Scholar/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    idite na sajt
                  </a>
                  <div className="rad-opis">
                    <p>
                      <em>Scholar</em> je imaginarni online servis koji je nastao kao zadatak za predmet "Elektronsko poslovanje". Sajt za ovaj servis je pravljen preko osnovnih front-end jezika. 
                    </p>
                    <p>
                      Projekat nije rađen samostalno. U dizajniranju sam imao pomoć kolege iz škole dok sam ja radio front-end sajta i to u jako kratkom roku i time video napredak prethodnog uvežbavanja brzine izrade sajta. 
                    </p>
                  </div>
                </div>
                <div className="rad">
                  <img src={screen3} alt={screen3} />
                  <a
                    href="https://cochleainear.000webhostapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    idite na sajt
                  </a>
                  <div className="rad-opis">
                    <p>
                      Samostalni rad na kompletnom identitetu imaginarne kompanije <em>Cochlea</em> za in-ear monitoring slušalice, dizajn sajta i njegovo stvaranje bio je glavna tema u mojoj završnoj godini. Prvi put sam se upustio u rad preko Wordpress-a što je bila ovogodišnja tema prakse u školi.
                    </p>
                    <p>
                      Ovaj projekat je bio završni rad prakse i sa njim sam pokazao znanje raznih elemenata, dodataka i mnogih drugih stvari koje Wordpress pruža i time dodao još jedan alat koji mogu da koristim u izradi veb sajtova. 
                    </p>
                  </div>
                </div>
              </Carousel>
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

export default Radovi;
