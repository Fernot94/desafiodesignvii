import { useState } from "react";
import AdicionaPU from "./AdicionaPU";

export default function Powerups() {
  const [add, setAdd] = useState(false);
  return (
    <div>
      <h1>Power Up's</h1>
      {add == false ? (
        <div>
          <div>
            <h2>Power Up 1</h2>
            <button onClick={() => setAdd(!add)}>
              Adicionar Candidatos ao Power Up 1
            </button>
          </div>
          <div>
            <h2>Power Up 2</h2>
            <button onClick={() => setAdd(!add)}>
              Adicionar Candidatos ao Power Up 2
            </button>
          </div>
          <div>
            <h2>Power Up 3</h2>
            <button onClick={() => setAdd(!add)}>
              Adicionar Candidatos ao Power Up 3
            </button>
          </div>{" "}
        </div>
      ) : (
        <AdicionaPU />
      )}
    </div>
  );
}
