import React from "react";
import "../styles/components/pages/electracusticas.css"

const Electroacusticas = (props) => {
    return (
        <main className="holder">
        <div className="DoceCajaCarbono">
            <img src="imagenes/electroacusticas/docecuerdascajacarbono.jpg" alt="Guitarra de doce cuerdas con caja de carbono electroacústica"></img>
            <h3>Guitarra electroacústica de doce cuerdas con caja de carbono.</h3>
            <p>Resistente y resonante caja de carbono ideal para giras arduas.</p>
        </div>
        <div className="DoceCuerdasNatural">
            <img src="imagenes/electroacusticas/docecuerdasnatural.jpg" alt="Guitarra electroacústica de doce cuerdas en madera natural con corte."></img>
            <h3>Guitarra electroacústica de doce cuerdas con corte en madera natural.</h3>
            <p>Comoda por el corte, vistosa por su acabado, ideal para sonido norteño, corridos, etc.</p>
        </div>
        <div className="eacacc">
            <img src="imagenes/electroacusticas/electroacusticaacerocorte.jpg" alt="Electroacústica cuerdas de nylon con corte"></img>
            <h3>Electroacústica con cuerdas de acero con corte.</h3>
            <p>Caja de madera microfoneada para ser amplificada.</p>
        </div>
        <div className="GipsyJazz">
            <img src="imagenes/electroacusticas/gipsyjazz.jpg" alt="Electroacústica GipsyJazz"></img>
            <h3>Electroacústica GipsyJazz</h3>
            <p>Modelo homenaje al gran Django Reinhardt... nada mas que agregar.</p>
        </div>
        <div className="TipoGodin">
            <img src="imagenes/electroacusticas/tipogodin.jpg" alt="Electroacústica tipo Godin"></img>
            <h3>Electroacústica tipo Godin</h3>
            <p>Nuestra version de la majestuosa Godin de tapa lisa.</p>
        </div>
        </main>
    );
}

export default Electroacusticas;