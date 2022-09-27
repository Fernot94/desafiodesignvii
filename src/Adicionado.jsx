import { useState } from "react";
import Powerups from "./Powerups";

export default function Adicionado() {
  const [home, setHome] = useState(false);
  return (
    <div>
      {home === false ? (
        <div>
          <h2>Candidato adicionado ao Power Up!</h2>
          <button onClick={() => setHome(!home)}>Voltar</button>
        </div>
      ) : (
        <Powerups />
      )}
    </div>
  );
}
