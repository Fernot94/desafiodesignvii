import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Formulario from "./Formulario";
import Candidatos from "./Candidatos";
import Editar from "./Editar";

function App() {
  const [form, setForm] = useState(false);
  const [cand, setCand] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <button className="candidaturas" onClick={() => setForm(!form)}>
          Adicionar Candidato
        </button>
        <button className="candidates" onClick={() => setCand(!cand)}>
          Candidatos
        </button>
      </div>
      <div className="body">
        {form == false ? "" : <Formulario />}
        {cand == false ? "" : <Candidatos />}
      </div>
    </div>
  );
}

export default App;
