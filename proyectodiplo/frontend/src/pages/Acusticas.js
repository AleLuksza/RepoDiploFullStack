import React from "react";
import "../styles/components/pages/acusticas.css"

const Acusticas = (props) => {
    return (
        <main className="holder">
        <div className="acacc">
            <img src="imagenes/acusticas/acusticacuerdasaceroconcorte.jpg" alt="Acústica cuerdas de acero con corte."></img>
            <h3>Guitarra acústica con cuerdas de acero con corte.</h3>
            <p>Guitarra acustica clasica de sonido folk co corte para alcanzar las notas mas altas con facilidad.</p>
        </div>
        <div className="acasc">
            <img src="imagenes/acusticas/acusticacuerdasacerosincorte.jpg" alt="Acústica cuerdas de acero sin corte"></img>
            <h3>Guitarra acústica con cuerdas de acero sin corte.</h3>
            <p>Acústica con cuerdas de acero sin corte para los mas conservadores de la forma y resonancia.</p>
        </div>
        <div className="acnsc">
            <img src="imagenes/acusticas/acusticacuerdasacerosincorte2.jpg" alt="Acústica cuerdas de nylon sin corte"></img>
            <h3>Tambien llamada criolla o flamenca.</h3>
            <p>Modelo de guitarra clasica sin corte de sonido suave.</p>
        </div>
        <div className="acncc">
            <img src="imagenes/acusticas/acusticacuerdasacerosincorte2.jpg" alt="Acústicacuerdas de nylon con corte"></img>
            <h3>Acústica con cuerdas de nylon con corte.</h3>
            <p>Todas las bondades de una guitarra clásica con corte para facil alcance de las notas mas agudas del
                espectro.</p>
        </div>


    </main>
    );
}

export default Acusticas;