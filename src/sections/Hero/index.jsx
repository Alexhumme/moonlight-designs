import moonlight from "../../assets/elements/Moonlight.png"
import textWheel from "../../assets/elements/text_wheel.png";
import Clouds from "../../components/Clouds";

import "./Hero.css"

import React from "react";

export default function Hero () {
    return (
        <section className="app-section app-hero">
            <div className="app-hero-content">
                <div className="wheel">
                    <img src={textWheel} className="wheel-text" alt="wheel" />
                    <img src={moonlight} className="wheel-moonlight" alt="Moonlight render" />
                    <div className="glow"></div>
                </div>
            </div>
            <Clouds />
        </section>
    )
}

