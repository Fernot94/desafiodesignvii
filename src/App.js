import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Formulario from "./Formulario";
import Candidatos from "./Candidatos";
import Editar from "./Editar";
import Powerups from "./Powerups";

function App() {
  const [form, setForm] = useState(false);
  const [cand, setCand] = useState(false);
  const [power, setPower] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <button
          className="button"
          onClick={() => {
            setForm(!form);
            setCand(false);
            setPower(false);
          }}
        >
          Adicionar Candidato
        </button>
        <button
          className="button"
          onClick={() => {
            setCand(!cand);
            setForm(false);
            setPower(false);
          }}
        >
          Candidatos
        </button>
        <button
          className="button"
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
