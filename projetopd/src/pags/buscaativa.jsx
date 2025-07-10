import React, { useState } from "react";
import "../style/busca.css";

const dadosSimulados = {
  "12345": {
    nome: "João Silva",
    matricula: "12345",
    serie: "2º Ano Informática",
    turma: "2anoINFO",
    telefone: "(92) 99999-9999",
    email: "joao.silva@email.com",
    endereco: "Rua Exemplo, nº 123, Bairro Centro",
  },
  "67890": {
    nome: "Maria Oliveira",
    matricula: "67890",
    serie: "1º Ano Administração",
    turma: "1anoADM",
    telefone: "(92) 98888-8888",
    email: "maria.oliveira@email.com",
    endereco: "Av. Central, nº 456, Bairro Alegria",
  },
};

const BuscaAtiva = () => {
  const [matriculaBusca, setMatriculaBusca] = useState("");
  const [aluno, setAluno] = useState(null);
  const [erro, setErro] = useState("");

  const handleBuscar = (e) => {
    e.preventDefault();
    setErro("");
    const resultado = dadosSimulados[matriculaBusca.trim()];
    if (resultado) {
      setAluno(resultado);
    } else {
      setAluno(null);
      setErro("Matrícula não encontrada");
    }
  };

  return (
    <div className="main-contai">
      <form className="form-alt" onSubmit={handleBuscar}>
        <div className="containe" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h3 className="titulo">Busca por Matrícula</h3>
          <hr color="#d9d9d9" height="1px" />

          <label style={{ gridColumn: "span 2" }}>
            Matrícula:
            <input
              type="text"
              value={matriculaBusca}
              onChange={(e) => setMatriculaBusca(e.target.value)}
              placeholder="Digite a matrícula"
              required
            />
          </label>

          <div className="button-container" style={{ gridColumn: "span 2" }}>
            <button type="submit">Buscar</button>
          </div>

          {erro && (
            <p
              style={{
                gridColumn: "span 2",
                color: "red",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {erro}
            </p>
          )}

          {aluno && (
            <>
              <h3 className="titulo" style={{ marginTop: "30px" }}>
                Informações do Aluno
              </h3>

              <label>
                Nome:
                <input type="text" value={aluno.nome} readOnly />
              </label>

              <label>
                Matrícula:
                <input type="text" value={aluno.matricula} readOnly />
              </label>

              <label>
                Série:
                <input type="text" value={aluno.serie} readOnly />
              </label>

              <label>
                Turma:
                <input type="text" value={aluno.turma} readOnly />
              </label>

              <label>
                Telefone:
                <input type="text" value={aluno.telefone} readOnly />
              </label>

              <label>
                E-mail:
                <input type="text" value={aluno.email} readOnly />
              </label>

              <label className="full-width">
                Endereço:
                <input type="text" value={aluno.endereco} readOnly />
              </label>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default BuscaAtiva;
