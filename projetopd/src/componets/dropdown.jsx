import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/dropdown.css";

const Dropdown = () => {
  const [abrirmenu, setabrirmenu] = useState(null);

  const Menu = (menu) => {
    setabrirmenu(abrirmenu === menu ? null : menu);
  }; // função para abrir o menu

  const CloseMenu = () => {
    setabrirmenu(null);
  }; // função para fechar o menu

  return (
    <div className="sidebar">
      {/* Link para o menu principal */}
      <div className="menu-item">
        <Link to="/" onClick={CloseMenu}>
         <p className="titulodrop">Home</p>
        </Link>
      </div>
      {/* início acoes cae */}
      <div className="menu-item" onMouseEnter={() => Menu("acoes")} onMouseLeave={CloseMenu}>
        <p className="titulodrop">Ações da CAE</p>
        {abrirmenu === "acoes" && (
          <div className="sub-menu">
            <Link to="/Atendimento" onClick={CloseMenu}><p className="sub-menudrop"> Atendimento ao Discente</p></Link>
            <Link to="/BuscaAtiva" onClick={CloseMenu}><p className="sub-menudrop">Busca Ativa</p></Link>
            <Link to="/Justificativa" onClick={CloseMenu}><p className="sub-menudrop">Justificativa</p></Link>
            <Link to="/Disciplinar" onClick={CloseMenu}><p className="sub-menudrop">Registro de Ocorrência</p></Link>
            <Link to="/Solicitacoes" onClick={CloseMenu}><p className="sub-menudrop">Solicitações e Dúvidas</p></Link>
          </div>
        )}
      </div>
      {/* fim acoes cae */}
      {/* início assistencia */}
      <div className="menu-item" onMouseEnter={() => Menu("assistencia")} onMouseLeave={CloseMenu}>
        <p className="titulodrop">Assistência ao Discente</p>
        {abrirmenu === "assistencia" && (
          <div className="sub-menu">
            <Link to="/Assistencia" onClick={CloseMenu}><p className="sub-menudrop">Questionário Socioeconômico</p></Link>
          </div>
        )}
         {/* fim assistencia*/}
      </div>
       {/* início consulta */}
      {/* início gerenciar */}
      <div className="menu-item" onMouseEnter={() => Menu("gerenciar")} onMouseLeave={CloseMenu}>
        <p className="titulodrop">Gerenciar</p>
        {abrirmenu === "gerenciar" && (
          <div className="sub-menu">
            <Link to="/CadastroCAE" onClick={CloseMenu}>
              <p className="sub-menudrop">Cadastro do Agente</p>
            </Link>
          </div>
        )}
      </div>
      {/* fim gerenciar*/}
       {/* início sobre */}
      <div className="menu-item">
        <Link to="/Sobre" onClick={CloseMenu}>
          <p className="titulodrop">Sobre</p>
        </Link>
      </div>
       {/*fimm sobre */}
    </div>
  ); // fim return
};

export default Dropdown;