import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../src/TelaInicio.css'
import './App.css'
import Login from './pags/Login'
import CadastroCAE from "../src/Cadastro/cadastroCAE"
import CadastroAluno from "../src/Cadastro/cadastroAluno"
import CadastroProf from "../src/Cadastro/CadastroProf"
import Hearder from './componets/hearder'
import Footer from './componets/footer'

const TelaInicio = () => {

  return (
    <>
      <Hearder /> 
      <div className="main-box">
      <div id="main-ti">
        <h1 className="titulo-inicio">Bem-Vindo ao Sistema de Prontuário Disciplinar</h1>
        <p className="sub-inicio">Coordenação de Acompanhamento ao Educando (CAE)</p>
        <p className="sub-inicio">IFAM | Campus Iranduba</p>
     
      <div className="app-containerti">
          <Login/>
      </div>
      <div class="bloco-1">
        <div class="card">
            <h2>Aluno</h2>
            <Link to="/CadastroAluno">Ir para Cadastro Aluno</Link>
        </div>
        <div class="card">
            <h2>Professor</h2>
            <Link to="/CadastroProf">Ir para Cadastro Professor</Link>
        </div>
        <div class="card">
            <h2>Agente CAE</h2>
            <Link to="/CadastroCAE">Ir para Cadastro Agente CAE</Link>
        </div>
    </div>
      </div>
      

</div>
    </>
  );
}
export default TelaInicio;
