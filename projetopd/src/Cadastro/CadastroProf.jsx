import React from "react";
import '../CadastroStyle/cadastroCAE.css'
import Cadlogo from '../imagens/if-lateralnormal.png'

function CadastroProfessor() {
         
    return (
        <div className="main-cadastro">
            <img className="cadlogin" src={Cadlogo}></img>
                <form className="form-cadastro">
                    <div className="container-cadastro">
                      
                        <h3 className="titulo">Cadastro do Docente</h3>
                        <hr color="#d9d9d9" height="1px"></hr>
            
                          <label className="full-width">SIAPE:<input type="number" required></input></label>
                        <label className="full-width">CPF:<input type="number" required></input></label>
                        <label className="full-width">Nome Completo:<input type="text" required></input></label>
                        <label className="full-width">RG:<input type="number" required></input></label>
                        <label className="full-width">Data de Nascimento:<input type="date" required></input></label>
                        <label className="full-width">Email:<input type="text" required></input></label>  
                        <label className="full-width">Login:<input type="text" required></input></label>          
                        <label className="full-width">Senha:<input type="password" required></input></label>
                
                        <div class="button-container"> 
                            <button type="submit">Cadastrar</button>
                            <button type="submit">Alterar</button>
                            <button type="submit">Cancelar</button>
                        </div>
                        <div id="container-forget">
                        <p>Já tem uma conta?</p>
                        <div className="butao">
                    
                      </div>
                        </div>
                    </div>
                </form>
            </div>
    );
}
export default CadastroProfessor;
