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
      <form>
        <label>
          Nome:
          <input
            onChange={(ele) => setNome(ele.target.value)}
            value={nome}
            type={"text"}
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            onChange={(ele) => setIdade(ele.target.value)}
            value={idade}
            type={"text"}
          />
        </label>
        <br />
        <label>
          Morada:
          <input
            onChange={(ele) => setMorada(ele.target.value)}
            value={morada}
            type={"text"}
          />
        </label>
        <br />
        <label>
          Número de Telefone:
          <input
            onChange={(ele) => setTelefone(ele.target.value)}
            value={telefone}
            type={"text"}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            onChange={(ele) => setEmail(ele.target.value)}
            value={email}
            type={"text"}
          />
        </label>
        <br />
        <label>
          Status:
          <input
            onChange={(ele) => setStatus(ele.target.value)}
            value={status}
            type={"text"}
          />
        </label>
        <br />
        <button onClick={() => setSuccess(true)}>Adicionar</button>
        {success == false ? "" : <h2>Candidato adicionado com sucesso!</h2>}
      </form>
    </div>
  );
}
