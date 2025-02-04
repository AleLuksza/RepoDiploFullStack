import React from "react";
import "../styles/components/pages/guitarras.css"

const Acusticas = (props) => {
    return (
        <main className="holder">
            <div className="itemguitarras">
                <img src="imagenes/acusticas/acusticacuerdasaceroconcorte.jpg" alt="Acústica cuerdas de acero con corte." width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Guitarra acústica con cuerdas de acero con corte.</h3>
                    <p>Guitarra acústica clásica de sonido folk con corte para alcanzar las notas mas altas con facilidad.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/acusticas/acusticacuerdasacerosincorte.jpg" alt="Acústica cuerdas de acero sin corte" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Guitarra acústica con cuerdas de acero sin corte.</h3>
                    <p>Acústica con cuerdas de acero sin corte para los mas conservadores de la forma y resonancia.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/acusticas/tipocriollasincorte.jpg" alt="Acústica cuerdas de nylon sin corte" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Tambien llamada criolla o flamenca.</h3>
                    <p>Modelo de guitarra clásica sin corte de sonido suave.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/acusticas/acusticacuerdasacerosincorte2.jpg" alt="Acústicacuerdas de nylon con corte" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Acústica con cuerdas de nylon con corte.</h3>
                    <p>Todas las bondades de una guitarra clásica con corte para fácil alcance de las notas mas agudas del
                        espectro.</p>
                </div>
            </div>


        </main>
    );
}

export default Acusticas;