import React from 'react';
import './ContactUs.css'; // Asegúrate de tener este archivo CSS
import star from '../../assets/elements/start_white.svg'; // Asegúrate de que la ruta sea correcta


const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="title">CONTACTANOS</h1>
      <h2 className="subtitle">PARA HACER TU DISEÑO REALIDAD</h2>
      <div className="separator">
        <img src={star} alt="" />
        <div></div>
        <img src={star} alt="" />
      </div>

      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
        </div>
        <div className="input-row">
          <input type="email" placeholder="Correo Electronico" required />
          <input type="tel" placeholder="Número telefónico" required />
          <input type="text" placeholder="Nombre de tu Marca" />
        </div>
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;