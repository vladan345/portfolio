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
          <img className="logo" src={logo} alt="logo" />
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
                      Moj prvi veći projekat kao i zadatak u školi koju pohađam,
                      je bio da se uradi front-end sajta koristeći osnovne
                      jezike za izradu veb sajta (HTML, CSS i Javascript). Kao
                      temu za ovaj sajt sam uzeo bend iz Beograda koji nije imao
                      kako da prikaže svoj identitet osim svojom Facebook
                      stranicom.
                    </p>
                    <p>
                      Sa ovim projektom sam savladao HTML i CSS i naučio dosta
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
                      Scholar je imaginarni online servis koji je nastao kao zadatak za predmet "Elektronsko poslovanje". Sajt za ovaj servis je pravljen preko osnovnih Front-end jezika. 
                    </p>
                    <p>
                      Sa ovim projektom sam savladao HTML i CSS i naucio dosta
                      korisnih stvari iz Javascript-a da bi sajt bio sto vise
                      interaktivan jer se time istice od mnogih drugih.
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
                      Moj prvi veći projekat kao i zadatak u školi koju pohađam,
                      je bio da se uradi front-end sajta koristeći osnovne
                      jezike za izradu veb sajta (HTML, CSS i Javascript). Kao
                      temu za ovaj sajt sam uzeo bend iz Beograda koji nije imao
                      kako da prikaže svoj identitet osim svojom Facebook
                      stranicom.
                    </p>
                    <p>
                      Sa ovim projektom sam savladao HTML i CSS i naučio dosta
                      korisnih stvari iz Javascript-a da bi sajt bio što više
                      interaktivan jer se tako izdvaja od mnogih drugih.
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
