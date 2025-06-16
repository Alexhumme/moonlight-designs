import Buildings from "./Buildings";
import "./BuildingsSection.css";
import stars from "../../assets/elements/stars.png";
import nube from "../../assets/elements/Nube.png"; // Assuming you have a cloud image to use


export default function BuildingsSection(){
    return (
        <section className=" app-buildings">
            <img src={stars} className="stars" alt="" />
            <Buildings /> 
            <img src={nube} alt="" className="nube" />
            <img src={nube} alt="" className="nube" />
            <div className="gradient-overlay"></div>
        </section>
    )
}