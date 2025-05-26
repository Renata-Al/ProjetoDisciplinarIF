import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../src/TelaInicio.css'
import './App.css'
import Login from './pags/Login'
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
      <h1 className="titulo-inicio">Não possue um Cadastro?</h1>
       <p className="sub-inicio">Cadastra-se</p>
      <div class="bloco-1">
        <div class="card">
            <Link to="/CadastroAluno"> <h2>Aluno</h2></Link>
        </div>
        <div class="card">
            <Link to="/CadastroProf"> <h2>Professor</h2></Link>
        </div>
        <div class="card">
            <Link to="/CadastroCAE"> <h2>Agente CAE</h2></Link>
        </div>
    </div>
      </div>
   
</div>

    </>
  );
}
export default TelaInicio;
