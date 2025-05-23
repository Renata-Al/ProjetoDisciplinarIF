import React from "react";
import Hearder from "./componets/hearder";
import Footer from "./componets/footer";
import CadAgenteCAE from "./Cadastro/cadastroCAE"
import '../src/App.css'
import '../src/TelaInicio.css'
import Home from './pags/home'
import Login from './pags/Login'
import logo from "../src/imagens/img.jpg";
function TelaInicio() {
  return (
    <>
      <Hearder />
      <div id="main-ti">
        <h1 className="titulo-inicio">Bem-Vindo ao Sistema de Prontuário Disciplinar</h1>
        <p className="sub-inicio">Coordenação de Acompanhamento ao Educando (CAE)</p>
        <p className="sub-inicio">IFAM | Campus Iranduba</p>
      </div>
     <div class="bloco-1">
        <div class="card">
            <h2>Aluno</h2>
        </div>
        <div class="card">
            <h2>Professor</h2>
        </div>
        <div class="card">
            <h2>Agente CAE</h2>
        </div>
    </div>
      <div className="app-containerti">
          <Login/>
      </div>
      <Footer />
    </>
  );
}
export default TelaInicio;
