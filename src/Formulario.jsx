import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [morada, setMorada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  return (
    <div>
      <h1>Adicionar Candidato</h1>
      <h2>Fotografia</h2>
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
        <button onClick={() => setSuccess(!success)}>Adicionar</button>
        {success == false ? "" : <h2>Candidato adicionado com sucesso!</h2>}
      </form>
    </div>
  );
}
