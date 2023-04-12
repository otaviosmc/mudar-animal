import "./App.css";
import { useState } from "react";
import Topo from "./components/Topo";
import CardImg from "./components/Animal/CardImg";
import CardInfo from "./components/Animal/CardInfo";

function App() {
  let tipoAn;
  let infoAn;
  let imgAnimal;
  const [animal, setAnimal] = useState("cachorro");

  if (animal === "cachorro") {
    imgAnimal = "/assets/cachorro.jpg";
    infoAn = "É um mamífero carnívoro da família dos canídeos.";
    tipoAn = "Cachorro";
  } else {
    imgAnimal = "/assets/gato.jpg";
    infoAn = "É um mamífero carnívoro da família dos felídeos.";
    tipoAn = "Gato";
  }

  const mudarAnimal = () => {
    animal === "cachorro" ? setAnimal("gato") : setAnimal("cachorro");
  };
  return (
    <div className="App bg-blue-300 w-full h-screen flex flex-col items-center justify-center">
      <Topo alteraAnimal={mudarAnimal} />
      <CardImg imgAnimal={imgAnimal} />
      <CardInfo infoAn={infoAn} tipoAn={tipoAn} />
    </div>
  );
}

export default App;
