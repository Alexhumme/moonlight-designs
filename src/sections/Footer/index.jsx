import React from "react";
import "./Footer.css";
import logo from "../../assets/elements/logo_white.png"
import whatsapp from "../../assets/icons/icon_whatsapp.png";
import facebook from "../../assets/icons/icon_facebook.png";
import instagram from "../../assets/icons/icon_instagram.png";
//import twitter from "../../assets/icons/icon_twitter.png";
import tiktok from "../../assets/icons/icon_tiktok.png";

export default function Footer() {
    return (
        <footer className="">
            <div className="footer-container">
            <div className="footer-section">
                <h3>Más información</h3>
                <ul>
                    <li><a href="#">Términos de uso</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Publicidad personalizada</a></li>
                    <li><a href="#">Acuerdos de suscripción</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Ayuda</h3>
                <ul>
                    <li><a href="#">Centro de ayuda</a></li>
                    <li><a href="#">Acerca de Moonlight Designs</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Marcas</h3>
                <ul>
                    <li>Disney</li>
                    <li>Pixar</li>
                    <li>Marvel</li>
                    <li>Star Wars</li>
                    <li>National Geographic</li>
                    <li>Star</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contáctanos</h3>
                <p>Línea gratuita nacional: 01 8000 85 5409</p>
                <p>Conmutador: +57 3044604786</p>
                <p>Correo: <a href="mailto:mdesigns@gmail.com">mdesigns@gmail.com</a></p>
            </div>
            <div className="social-icons">
                <a href="#"><img src={whatsapp} alt="WhatsApp"/></a>
                <a href="#"><img src={facebook} alt="Facebook"/></a>
                <a href="#"><img src={instagram} alt="Instagram"/></a>
                <a href="#"><img src={tiktok} alt="TikTok"/></a>
            </div>
            <div className="footer-logo">
                <img src={logo} alt="Moonlight Designs"/>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Moonlight Designs. Universidad de La Guajira.</p>
                <p>La programación del contenido deportivo difiere según el plan. Moonlight Designs requiere una suscripción y ser mayor de 18 años. Contenidos sujetos a disponibilidad.</p>
                <p>Universidad de la Guajira, Riohacha - Colombia.</p>
            </div>
        </div>
        </footer>
    );
}