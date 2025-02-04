import React from "react";
import "../styles/components/pages/guitarras.css"

const Electroacusticas = (props) => {
    return (
        <main className="holder">
            <div className="itemguitarras">
                <img src="imagenes/electroacusticas/docecuerdascajacarbono.jpg" alt="Guitarra de doce cuerdas con caja de carbono electroacústica" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Guitarra electroacústica de doce cuerdas con caja de carbono.</h3>
                    <p>Resistente y resonante caja de carbono ideal para giras arduas.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electroacusticas/docecuerdasnatural.jpg" alt="Guitarra electroacústica de doce cuerdas en madera natural con corte." width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Guitarra electroacústica de doce cuerdas con corte en madera natural.</h3>
                    <p>Cómoda por el corte, vistosa por su acabado, ideal para sonido norteño, corridos, etc.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electroacusticas/electroacusticaacerocorte.jpg" alt="Electroacústica cuerdas de nylon con corte" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Electroacústica con cuerdas de acero con corte.</h3>
                    <p>Caja de madera microfoneada para ser amplificada.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electroacusticas/gipsyjazz.jpg" alt="Electroacústica GipsyJazz" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Electroacústica GipsyJazz</h3>
                    <p>Modelo homenaje al gran Django Reinhardt... nada mas que agregar.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/electroacusticas/tipogodin.jpg" alt="Electroacústica tipo Godin" width={500} height={220} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Electroacústica tipo Godin</h3>
                    <p>Nuestra version de la majestuosa Godin de tapa lisa.</p>
                </div>
            </div>
        </main>
    );
}

export default Electroacusticas;