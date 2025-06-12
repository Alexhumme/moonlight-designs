import "./AboutUs.css"
import logo from "../../assets/elements/isotipo_white.png"
export default function AboutUs() {
    return (
        <section className="app-aboutus app-section">
            <div className="">

                <img src={logo} alt="La imagen" />
            </div>

            <div>
                <h1>DISEÑO SIN<br />LÍMITES</h1>
                <hr />
                <p>
                    Con nosotros la creatividad no tiene horario, la idea <strong>Moonlight Design</strong> nace la tranquilidad y serenidad nocturna. Nosotros somos un
                    equipo enfocado en brindar servicios de la más alta calidad. Nos
                    comprometemos con elevar la identidad de tu marca a los más altos
                    estándares, con nuestro trabajo podemos crear interfaces
                    que <strong>sorprendan, cautiven y consoliden</strong> tus clientes.
                </p>
            </div>

        </section>
    )
}