import { useState } from "react";
import Editar from "./Editar";
import Visualizar from "./Visualizar";

export default function Candidatos() {
  const [visualizar, setVisualizar] = useState(false);
  return (

    <div>

      <div className="titulo">
        <h1>Candidatos</h1>
      </div>
      <div className="divCandidatos">
        {visualizar == false ? (
          <div>
            <div for="Ana" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Ana Daniel</p>
            </div>

            <div for="Fernando" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Fernando Abreu</p>
            </div>

            <div for="Daniel" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Daniel Pina</p>
            </div>

            <div for="Ayrton" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Ayrton Valério</p>
            </div>

            <div for="Sonia" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Sonia</p>
            </div>

            <div for="Miguel" className="candidatos">
              <p onClick={() => setVisualizar(!visualizar)}>Miguel Silva</p>
            </div>



          </div>
        ) : (
          <Visualizar />
        )}
      </div>

    </div>
  );
}
