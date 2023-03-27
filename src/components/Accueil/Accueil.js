import React from "react";
import "./accueil.css";

function Accueil() {
  function rendezVous() {
    console.log("test");
  }
  return (
    <div id="Accueil" className="global-Accueil">
      <div className="Accueil">
        <div className="text-acceuil">
          <div>Et si le plus beau projet</div>
          <div>sur lequel vous pouviez travailler...</div>
          <div>c'était vous ?</div>
        </div>
        <div className="rendezVous" onClick={rendezVous}>
          Prendre Rendez-vous
        </div>
      </div>
    </div>
  );
}

export default Accueil;
