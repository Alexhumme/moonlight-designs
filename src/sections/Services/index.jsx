import React from "react";
import "./Services.css";
import Clouds from "components/Clouds";
import star from "../../assets/elements/start_white.svg";

export default function Services() {
    return (
        <div className="app-section app-services ">
            <Clouds/>
            <div className="services-div">
                <div className=""></div>
                <img src={star} alt="" />
                <div className=""></div>
            </div>
            <div className="cards-container">

                <div className="card">
                    <h2>DISEÑO DE IDENTIDAD</h2>
                    <hr />
                    <p>Se trata de establecer un vínculo entre tu empresa y tus clientes
                        a través de estrategias que proporcionan valor a quienes podrían
                        estar interesados en tus productos o servicios.</p>
                    <p><span className="highlight">En Moonlight Design</span> somos expertos
                        en diseñar campañas capaces de conectar, transmitir emociones y
                        construir relaciones duraderas.</p>
                </div>

                <div className="card">
                    <h2>ASESORÍA DE MARCA</h2> 
                    <hr />
                    <p><span className="highlight">En Moonlight Design</span> elevamos tu
                        marca al siguiente nivel, transformamos ideas en marcas memorables.
                        Con nuestra asesoría de marca construimos una identidad sólida.</p>
                    <p>Conectamos con tus clientes, diseñamos estrategias que transmiten
                        todo el valor de tus productos. Contáctanos, diférenciate, transfórmate
                        con <span className="highlight">Moonlight Design</span>.</p>
                </div>

                <div className="card">
                    <h2>DISEÑO WEB</h2>
                    <hr />
                    <p>Nuestro servicio de <span className="highlight">diseño web</span> fusiona tus
                        ideas con tecnología y diversas estrategias creativas para garantizar la
                        presencia digital.</p>
                    <p>Garantizamos potenciar la identidad de tu marca y la mejor experiencia de
                        usuario. En <span className="highlight">Moonlight Design</span> nos caracterizamos
                        por la optimización y calidad. Haz que tus productos brillen en el mundo
                        digital, <span className="highlight">contáctanos</span>.</p>
                </div>

            </div>
        </div>

    );
}

