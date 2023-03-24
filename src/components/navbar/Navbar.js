import React from "react";
import "./navbar.css";
import logo from "../../assets/oiseau.png";

function Navbar() {
  return (
    <div className="global-navbar">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="text">
          <div className="name">Christelle Leipp</div>
          <div className="type">Hypnothérapeute</div>
        </div>
      </div>
      <div className="menu">
        <a href="#Accueil">Accueil</a>
        <a href="#QuiSuisJe">Qui suis-je</a>
        <a href="#FAQ">FAQ</a>
        <a href="#Boutique">Boutique</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
