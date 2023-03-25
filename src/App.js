import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hypnose from "./components/hypnose/Hypnose";
import Accueil from "./components/Accueil/Accueil";
import QuiSuisJe from "./components/Qui-Suis-je/QuiSuisJe";
import Boutique from "./components/Boutique/Boutique";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <QuiSuisJe />
      <Hypnose />
      <Boutique />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
