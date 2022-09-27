import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Formulario from "./Formulario";
import Candidatos from "./Candidatos";
import Editar from "./Editar";
import Powerups from "./Powerups";
import ListaPerfis from "./ListaPerfis";

function App() {
  const [form, setForm] = useState(false);
  const [cand, setCand] = useState(false);
  const [power, setPower] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <button
          className="candidaturas"
          onClick={() => {
            setForm(!form);
            setCand(false);
            setPower(false);
          }}
        >
          Adicionar Candidato
        </button>
        <button
          className="candidates"
          onClick={() => {
            setCand(!cand);
            setForm(false);
            setPower(false);
          }}
        >
          Candidatos
        </button>
        <button
          className="powerups"
          onClick={() => {
            setPower(!power);
            setCand(false);
            setForm(false);
          }}
        >
          Power Up's
        </button>
      </div>
      <div className="body">
        {form == false ? "" : <Formulario />}
        {cand == false ? "" : <Candidatos />}
        {power == false ? "" : <Powerups />}
      </div>
    </div>
  );
}

export default App;
