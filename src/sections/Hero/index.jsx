import moonlight from "../../assets/elements/Moonlight.png"
import textWheel from "../../assets/elements/text_wheel.png";

import cld3left from "../../assets/elements/nubes/l1_l.png";
import cld3right from "../../assets/elements/nubes/l1_r.png";
import cld2left from "../../assets/elements/nubes/l2_l.png";
import cld2right from "../../assets/elements/nubes/l2_r.png";
import cld1left from "../../assets/elements/nubes/l3_l.png";
import cld1right from "../../assets/elements/nubes/l3_r.png";

import React from "react";


function Clouds () {
    return (
        <div className="clouds">
            <div className="cloud cloud-1">
                <div className="cloud-left"><img src={cld1left} alt="" /></div>
                <div className="cloud-right"><img src={cld1right} alt="" /></div>
            </div>
            <div className="cloud cloud-2">
                <div className="cloud-left"><img src={cld2left} alt="" /></div>
                <div className="cloud-right"><img src={cld2right} alt="" /></div>
            </div>
            <div className="cloud cloud-3">
                <div className="cloud-left"><img src={cld3left} alt="" /></div>
                <div className="cloud-right"><img src={cld3right} alt="" /></div>
            </div>
        </div>
    )
}
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

