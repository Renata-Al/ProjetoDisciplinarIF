import React,{lazy,Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import '../src/App.css'
import './TelaInicio.jsx'
import "./TelaInicio.css"
import Footer from './componets/footer.jsx'
import TelaInicio from "./TelaInicio.jsx";

//ROTAS SIDEBAR

const CadastroCAE = lazy(()=>import('./Cadastro/cadastroCAE.jsx'))
const CadastroAluno = lazy(()=>import('./Cadastro/cadastroAluno.jsx'))
const CadastroProf = lazy(()=>import('./Cadastro/CadastroProf.jsx'))

const App=()=>(

    <>
      <TelaInicio/>
        <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/CadastroAluno" element={<CadastroAluno/>}/>
            <Route path="/CadastroProf" element={<CadastroProf/>}/>
            <Route path="/CadastroCAE" element={<CadastroCAE/>}/>
            </Routes>
        </Suspense>
        </div>
       <Footer/>
    </>
);

export default App;