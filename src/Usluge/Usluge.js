import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";
import "./Usluge.css";
import { motion } from "framer-motion";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import Carousel from "react-img-carousel";

require("react-img-carousel/lib/carousel.css");
class Usluge extends Component {
  render() {
    const settings = {
      width: "100%",
      height: "100%",
      cellPadding: 5,
      alignItems: "center",
    };

    return (
      <div className="Usluge">
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
          <div className="usl-content">
            <h1>Usluge</h1>
            <div className="usl-slajder">
              <Carousel className="kartice" {...settings} style={settings}>
                <div className="kartica">
                  <img src={icon1} alt={icon1}></img>
                  <h3>Vanila front-end</h3>
                  <p>
                    Koristeći osnovne jezike za Front-end programiranje (HTML,
                    CSS i Javascript) pišem čist kod koji dovodi do dobro
                    optimizovanih veb sajtova tako da ne gube na svojim
                    funkcionalnostima.
                  </p>
                  <Link to="/radovi" className="cta-usluge">
                    pogledajte radove
                  </Link>
                </div>
                <div className="kartica">
                  <img src={icon2} alt={icon2}></img>
                  <h3>Wordpress</h3>
                  <p>
                    Jedan od najpoznatijih CMS programa koji omogućava brzo i
                    efikasno pravljenje sajta, pogotovu ako je u pitanju
                    prodavnica sa mnogo artikala za prikaz.
                  </p>
                  <Link to="/radovi" className="cta-usluge">
                    pogledajte radove
                  </Link>
                </div>
                <div className="kartica">
                  <img src={icon3} alt={icon3}></img>
                  <h3>React.js</h3>
                  <p>
                    Danas najkorišćenija i najpopularnija Javascript biblioteka
                    koja služi za pravljenje efikasnih i interaktivnih
                    aplikacija i veb aplikacija.
                  </p>
                  <Link to="/radovi" className="cta-usluge">
                    pogledajte radove
                  </Link>
                </div>
                <div className="kartica">
                  <img src={icon4} alt={icon4}></img>
                  <h3>Veb dizajn</h3>
                  <p>
                    Pre početka izrade sajta, potrebno je prvo dizajnirati ga.
                    Hijerarhija elemenata, kombinacija boja, fontova i sadržaja
                    ulaze u veb dizajn kao i UI/UX dizajn koji se obavlja u
                    programu Figma.
                  </p>
                  <Link to="/radovi" className="cta-usluge">
                    pogledajte radove
                  </Link>
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

export default Usluge;
