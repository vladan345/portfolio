import React, { Component } from "react";
import logo from "../logo.png";
import arrow from "./arrow.png";
import screen1 from "./screen1.png";
import screen2 from "./screen2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Radovi.css";
import Carousel from 'react-img-carousel';

class Radovi extends Component {
  render() {
    const settings =  {
      width: '960px',
      height: '710px', 
      cellPadding: 5,
      alignItems: "center", 
    };
    return (
      <motion.div 
      exit={{opacity: 0}}
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{duration: 1}}>
      <div className="Radovi">
        <div className="heading">
          <img className="logo" src={logo} alt="logo" />
          <div className="headers">
            <h1>VLADAN MARKOVIĆ</h1>
            <h2>FRONT-END DEVELOPER Radovi</h2>
          </div>
        </div>
        <div className="radovi-cont">
        <h1>Radovi</h1>
        <Carousel className="radovi-slider" {...settings}>
          <div className="rad">
            <img src={screen1} alt={screen1} />
            <a href="https://vladan345.github.io/MaeraOfficial/" target="_blank" rel="noopener noreferrer">idi na sajt</a>
            <div className="rad-opis">
              <p>Moj prvi veci projekat kao i zadatak u skoli koju pohadjam je bio da se iskodira front-end sajta koristeci osnovne jezike za izradu veb sajta (HTML, CSS i Javascript). Kao temu za ovaj sajt sam uzeo bend iz Beograda koji nije imao kako da prikaze svoj identitet osim na svojoj Facebook stranici.</p>
              <p>Sa ovim projektom sam savladao HTML i CSS i naucio dosta korisnih stvari iz Javascript-a da bi sajt bio sto vise interaktivan jer se time istice od mnogih drugih.</p>
            </div>
          </div>
          <div className="rad">
            <img src={screen2} alt={screen2} />
            <a href="https://vladan345.github.io/Scholar/#" target="_blank" rel="noopener noreferrer">idi na sajt</a>
            <div className="rad-opis">
              <p>Moj prvi veci projekat kao i zadatak u skoli koju pohadjam je bio da se iskodira front-end sajta koristeci osnovne jezike za izradu veb sajta (HTML, CSS i Javascript). Kao temu za ovaj sajt sam uzeo bend iz Beograda koji nije imao kako da prikaze svoj identitet osim na svojoj Facebook stranici.</p>
              <p>Sa ovim projektom sam savladao HTML i CSS i naucio dosta korisnih stvari iz Javascript-a da bi sajt bio sto vise interaktivan jer se time istice od mnogih drugih.</p>
            </div>
          </div>
        </Carousel>
        </div>
        <Link to="/portfolio" className="arrow">
            <img src={arrow} alt={arrow} />
        </Link>
      </div>
      </motion.div>
    );
  }
}

export default Radovi;
