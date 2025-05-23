import React from "react";
import "../style/atendimento.css";

const Atendimento = () => {
  return (
    <div className="main-cont">
      <form className="form-alt">
        <div className="containe">
          <h3 className="titulo">Atendimento ao Discente</h3>
          <hr color="#d9d9d9" height="1px"></hr>
          <label>
            Discente:<input type="text" required></input>
          </label>
          <label>
            Matrícula:<input type="text" required></input>
          </label>
          <label>
            Turma:
            <select name="turma" required>
              <option value="">Selecione</option>
              <option value="1anoADM">1º ADM</option>
              <option value="2anoADM">2º ADM </option>
              <option value="1anoINFO">1º INFO</option>
              <option value="2anoINFO">2º INFO</option>
              <option value="3anoINFO">3º INFO</option>
              <option value="subs-adm">Administração Subsequente</option>
              <option value="subs-info">Informática Subsequente</option>
              <option value="subs-sec">Secretariado Subsequente</option>
            </select>
          </label>
          <label>
            Data do Atendimento:<input type="date"></input>
          </label>
          <label>
            Despacho CAE:
            <select name="despacho" required>
              <option value="">Selecione</option>
              <option value="nue">NUE</option>
              <option value="comissao">Comissão Disciplinar</option>
            </select>
          </label>
          <label>
            Evidências:<input type="file"></input>
          </label>
          <label className="full-width">
            Motivo:<textarea required></textarea>
          </label>
          <label className="full-width">
            Descrição da Ocorrência:<textarea required></textarea>
          </label>

          <div class="button-container">
            <button type="submit">Salvar</button>
            <button type="submit">Alterar</button>
            <button type="submit">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Atendimento;
