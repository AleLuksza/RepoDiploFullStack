import React from "react";
import "../styles/components/pages/guitarras.css"

const Electricas = (props) => {
    return (
        <main className="holder">
            <div className="itemguitarras">
                <img src="imagenes/electricas/stratocaster.jpg" alt="Base Stratocaster" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo Stratocaster</h3>
                    <p>Clásico modelo fundacional del Rock. Con sonido brillante y gran ataque.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electricas/telecaster.jpg" alt="Base Telecaster" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo Telecaster</h3>
                    <p>La fundadora de la legendaria marca Fender destaca por su fidelidad y sencillez.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electricas/lespaul.jpg" alt="Base Les Paul" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo Les Paul</h3>
                    <p>También icónico modelo fundacional del rock, de sonido mas cálido y mayor sustain.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electricas/sg.jpg" alt="Base SG" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo SG</h3>
                    <p>Destinada a ser la sucesora de la Les Paul esta guitarra destaca por su sonido de gran ataque sin dejar de lado la calidez.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electricas/flyingv.jpg" alt="Base Flying V" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo Flying V</h3>
                    <p>Ideal para hard rock y metal pero no por ello limitada a estos géneros, esta es una de las guitarras mas versátiles.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electricas/prs.jpg" alt="Base PRS" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Base modelo PRS</h3>
                    <p>Híbrido entre Strato y Les Paul esta guitarra posee la ventajas de ambos modelos siendo una excelente opción para gran variedad de propósitos.</p>
                </div>
            </div>

        </main>
    );
}

export default Electricas;