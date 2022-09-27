import { useState } from "react";
import Editar from "./Editar";
export default function Visualizar() {
  const [editar, setEditar] = useState(false);
  return (
    <div>
      <p>Daniel Pina</p>
      <p>05/12/1997</p>
      <p>Rua de Cima</p>
      <p>912345678</p>
      <p>pina@gmail.com</p>
      <p>Candidato</p>
      <button onClick={() => setEditar(!editar)}>Editar</button>
      {editar == false ? "" : <Editar />}
    </div>
  );
}
