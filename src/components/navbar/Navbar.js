import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/oiseau.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function menu() {
    if (!openMenu) {
      setOpenMenu(true);
    } else setOpenMenu(false);
  }

  console.log(openMenu);
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
        <div className="button" onClick={menu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>{" "}
        </div>
        {openMenu ? null : (
          <div className="menuOpen">
            <a href="#Accueil">Accueil</a>
            <a href="#QuiSuisJe">Qui suis-je</a>
            <a href="#Hypnose">Hypnose</a>
            <a href="#Boutique">Boutique</a>
            <a href="#Faq">Faq</a>
            <a href="#Contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
