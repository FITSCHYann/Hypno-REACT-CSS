import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/oiseau.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [bar1, setBar1] = useState("bar1");
  const [bar2, setBar2] = useState("bar2");
  const [bar3, setBar3] = useState("bar3");

  function menu() {
    if (!openMenu) {
      setOpenMenu(true);
      setBar1("bar1-open");
      setBar2("bar2-open");
      setBar3("bar3-open");
    } else {
      setOpenMenu(false);
      setBar1("bar1");
      setBar2("bar2");
      setBar3("bar3");
    }
  }

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
          <div className={bar1}></div>
          <div className={bar2}></div>
          <div className={bar3}></div>
        </div>
        {!openMenu ? null : (
          <div className="menuOpen">
            <a
              href="#Accueil"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Accueil
            </a>
            <a
              href="#QuiSuisJe"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Qui suis-je
            </a>
            <a
              href="#Hypnose"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Hypnose
            </a>
            <a
              href="#Boutique"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Boutique
            </a>
            <a
              href="#Faq"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Faq
            </a>
            <a
              href="#Contact"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
