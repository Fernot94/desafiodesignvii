import { useState } from "react";
import Adicionado from "./Adicionado";

export default function AdicionaPU() {
  const [adicionar, setAdicionar] = useState(false);
  return (
    <div>
      {adicionar == false ? (
        <div>
          <h3 onClick={() => setAdicionar(!adicionar)}>Fernando Abreu</h3>
          <h3 onClick={() => setAdicionar(!adicionar)}>Daniel Pina</h3>
          <h3 onClick={() => setAdicionar(!adicionar)}>Ayrton Valério</h3>
          <h3 onClick={() => setAdicionar(!adicionar)}>Sonia </h3>
          <h3 onClick={() => setAdicionar(!adicionar)}>Miguel</h3>
        </div>
      ) : (
        <Adicionado />
      )}
    </div>
  );
}
