import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./configfirebase.js";

const email = document.getElementById("inputemail")
const senha = document.getElementById("inputsenha")
const btcriar = document.getElementById("btcriar")
const btlogar = document.getElementById("btlogar")
const redefsenha = document.getElementById("redefsenha")

btcriar.addEventListener("click", ()=>{
    createUserWithEmailAndPassword(auth,email.value,senha.value)
    .then((userCredential) => {
      alert("Usuário cadastrado com sucesso!")
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Não foi possível criar usuário :(")
    });
});//fim botão cadastrar

btlogar.addEventListener("click", ()=>{
  signInWithEmailAndPassword(auth,email.value,senha.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location.href="home.jsx"                                                                                                                  
    alert("usuario logado com sucesso")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Usuario nao cadastrado")
  });
})//fim botão logar

redefsenha.addEventListener("click", ()=>{
sendPasswordResetEmail(auth, email.value)
  .then(() => {
  alert("E-mail enviado para redefinir senha.")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Não foi possível enviar o email. Tente novamente :(")
  });
});