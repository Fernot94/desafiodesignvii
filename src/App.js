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
        <button className="candidaturas" onClick={() => setForm(!form)}>
          Adicionar Candidato
        </button>
        <button className="candidates" onClick={() => setCand(!cand)}>
          Candidatos
        </button>
        <button className="powerups" onClick={() => setPower(!power)}>
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
