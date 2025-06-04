import logo from "../assets/elements/logo_white.png";
import React from "react";
import Navbar from "./Navbar";

export default function Header(params) {
    return (
        <header className="app-header">
            <div className="app-header-left">
                <a href="/" className="app-logo">
                    <img 
                    src={logo}
                    alt="Logo" 
                    className="app-logo-image"
                     />
                </a>
            </div>

             <Navbar />

            <div className="app-header-right">
                <button type="button" className="login-button">Conoce mas</button>
            </div>
 
        </header>
    )
}

