import { useState } from "react";
import Visualizar from "./Visualizar";
export default function Editar() {
  const [nome, setNome] = useState("Daniel Pina");
  const [idade, setIdade] = useState("05/12/1997");
  const [morada, setMorada] = useState("Rua de Cima");
  const [telefone, setTelefone] = useState("912345678");
  const [email, setEmail] = useState("pina@gmail.com");
  const [status, setStatus] = useState("Candidato");
  const [success, setSuccess] = useState(false);
  const [cancelar, setCancelar] = useState(false);

  return cancelar == false ? (
    <div>
      <form>
        <label className="formCamp">
          Nome:
          <input
            onChange={(ele) => setNome(ele.target.value)}
            value={nome}
            type={"text"}
          />
        </label>
        <br />
        <label className="formCamp">
          Data de Nascimento:
          <input
            onChange={(ele) => setIdade(ele.target.value)}
            value={idade}
            type={"date"}
          />
        </label>
        <br />
        <label className="formCamp">
          Morada:
          <input
            onChange={(ele) => setMorada(ele.target.value)}
            value={morada}
            type={"text"}
          />
        </label>
        <br />
        <label className="formCamp">
          Número de Telefone:
          <input
            onChange={(ele) => setTelefone(ele.target.value)}
            value={telefone}
            type={"text"}
          />
        </label>
        <br />
        <label className="formCamp">
          Email:
          <input
            onChange={(ele) => setEmail(ele.target.value)}
            value={email}
            type={"text"}
          />
        </label>
        <br />
        <label className="formCamp">
          Status:
          <select
            onChange={(ele) => setStatus(ele.target.value)}
            value={status}
            type={"select"}
          >
            <option value={status}>Candidato</option>
            <option value={status}>Power Up # 1</option>
            <option value={status}>Power Up # 2</option>
            <option value={status}>Power Up # 3</option>
          </select>
        </label>
        <br />
        <button onClick={() => setSuccess(!success)}>Salvar</button>
        <button onClick={() => setCancelar(!cancelar)}>Cancelar</button>
        {success == false ? "" : <h2>Candidato editado com sucesso!</h2>}
      </form>
    </div>
  ) : (
    <Visualizar />
  );
}
