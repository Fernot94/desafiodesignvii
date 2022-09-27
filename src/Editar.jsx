import { useState } from "react";

export default function Editar() {
  const [nome, setNome] = useState("Daniel Pina");
  const [idade, setIdade] = useState("05/12/1997");
  const [morada, setMorada] = useState("Rua de Cima");
  const [telefone, setTelefone] = useState("912345678");
  const [email, setEmail] = useState("pina@gmail.com");
  const [status, setStatus] = useState("Candidato");
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
          Data de Nascimento:
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
        <button onClick={() => setSuccess(!success)}>Salvar</button>
        <button onClick={() => setSuccess(!success)}>Cancelar</button>
        {success == false ? "" : <h2>Candidato editado com sucesso!</h2>}
      </form>
    </div>
  );
}
