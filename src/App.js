import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Formulario from "./Formulario";

function App() {
  const [form, setForm] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <button className="candidaturas" onClick={() => setForm(!form)}>
          Adicionar Candidato
        </button>
      </div>
      <div className="body">{form == false ? "" : <Formulario />}</div>
    </div>
  );
}

export default App;
