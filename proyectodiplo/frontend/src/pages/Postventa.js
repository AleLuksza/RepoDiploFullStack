import React from "react";
import "../styles/components/pages/postventa.css"

const Postventa = (props) => {
    return (
        <main className="holder2">
        <div className="acacc">
            <img src="imagenes/plano1.jpg" alt="Collage de planos."></img>
            <h3>Beneficios extra de formar parte de nuestra familia de guitarras.</h3>
            <p>Además de adquirir una guitarra de calidad, hecha a mano por expertos luthiers y con los mejores materiales, Guitarras FlacoZeta
                te asegura que el mantenimiento (calibración, reformas y reparaciones) va a estar hecho por las mismas personas que fabricaron el instrumento.
            Te ofrecemos:
            </p>
            <ul>
                <li>Dos calibraciones anuales totalmente gratis.</li>
                <li>Descuentos en cuerdas, púas y correas.</li>
                <li>Asesoría integral para reformas posteriores de cada componente de tu instrumento.</li>
                <li>Acceso a clínicas para que los ajustes básicos los puedas hacer vos mismo si por algún motivo no podés acercarnos el instrumento.</li>
                <li>Clínicas de guitarra dictadas por celebridades del mundo de la guitarra, referentes de diversos géneros.</li>
            </ul>
        </div>
    </main>

    );
}

export default Postventa;