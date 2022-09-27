import { useState } from "react";
import profile from "./profile.png";
import Editar from "./Editar";
export default function Visualizar() {
  const [editar, setEditar] = useState(false);
  return (
    <div>
      {editar === false ? (
        <div>
          <img src={profile} alt="Profile" />
          <p>Nome: Daniel Pina</p>
          <p>Data de Nascimento: 05/12/1997</p>
          <p>Morada: Rua de Cima</p>
          <p>Telefone: 912345678</p>
          <p>Email: pina@gmail.com</p>
          <p>Status: Candidato</p>
          <button onClick={() => setEditar(!editar)}>Editar</button>
        </div>
      ) : (
        <Editar />
      )}
    </div>
  );
}
