import React from "react";
import '../style/footer.css';
import logo from '../imagens/ifwhite.png'

const Links = [
  { link:"https://www2.ifam.edu.br/campus/iranduba"},
  { link: "https://www.facebook.com/p/IFAM-Campus-Iranduba-100064655424735/?locale=pt_BR" },
  { link: "https://www.instagram.com/ifamiranduba/" },
  { link: "https://maps.app.goo.gl/hiSc8Vp3tmD8RnbLA" }
];

function Footer() {
  return (
    <footer>
      <img className="logoif" src={logo}></img>
        <div class="footer-section">
            <h4>Dúvidas?</h4>
            <ul>
                <li><a href="#">Solicitações e Dúvidas</a></li>
                <li><a href="#">Suporte</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Info</h4>
            <ul>
                <li><a href="#">Termos e Condições de Uso</a></li>
                <li><a href="#">Aviso de Privacidade</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Localidade</h4>
            <p class="footer-address"><a href={Links[3].link} target="blank" rel="noopener noreferrer">Rodovia Carlos Braga Km 1, s/n - Zona Rural, Iranduba - AM</a></p>
            <h4>Redes Sociais</h4>
            <div class="footer-icons">
                <a  href={Links[0].link} target="blank" rel="noopener noreferrer">🌐 Portal IFAM</a>
                <a href={Links[1].link} target="blank" rel="noopener noreferrer">📱 Facebook: IFAM Campus Iranduba</a>
                <a href={Links[2].link} target="blank" rel="noopener noreferrer">📷 Instagram: @ifamiranduba</a>
            </div>
        </div>
        <div class="copyright">
            Copyright © 2025 - Renata Albuquerque. IFAM - Campus Iranduba
        </div>
    </footer>
  );
}

export default Footer;