import { useState } from "react";
import Editar from "./Editar";
import Visualizar from "./Visualizar";

export default function Candidatos() {
  const [visualizar, setVisualizar] = useState(false);
  return (
    <div>
      <h1>Candidatos</h1>
      {visualizar == false ? (
        <div>
          <h3
            onClick={() => {
              setVisualizar(!visualizar);
            }}
          >
            Ana Daniel
          </h3>
          <h3 onClick={() => setVisualizar(!visualizar)}>Fernando Abreu</h3>
          <h3 onClick={() => setVisualizar(!visualizar)}>Daniel Pina</h3>
          <h3 onClick={() => setVisualizar(!visualizar)}>Ayrton Valério</h3>
          <h3 onClick={() => setVisualizar(!visualizar)}>Sonia</h3>
          <h3 onClick={() => setVisualizar(!visualizar)}>Miguel Silva</h3>
        </div>
      ) : (
        <Visualizar />
      )}
    </div>
  );
}
