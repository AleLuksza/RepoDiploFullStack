import React from "react";
import "../styles/components/pages/guitarras.css"

const Accesorios = (props) => {
    return (
        <main className="holder">

            <div className="itemguitarras">
                <img src="imagenes/mics/clavijasblancasnylon.jpg" alt="Clavijero guitarra clasica blanco" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Clavijero:</h3>
                    <p>Clavijero típico con clavijas blancas para guitarra clasica.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/mics/clavijasnegrasnylon.jpeg" alt="Clavijero guitarra clasica negro" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Clavijero:</h3>
                    <p>Una particularidad estética que no hace al sonido pero si a la personalización de tu guitarra</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/mics/clavijaspavonadas.jpg" alt="Clavijas pavonadas para guitarra eléctrica" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Clavijero</h3>
                    <p>De aspecto crudo y sombrío, las mas elegidas por los rockeros aunque son aptas para todos.</p>
                </div>
            </div>


            <div className="itemguitarras">
                <img src="imagenes/mics/michumbuckeralavista.jpg" alt="Microfonos doble bobina sin cobertor" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Microfonos</h3>
                    <p>Clásicos humbucker, de sonido amplio y reductores de ruidos.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/mics/michumbuckerblindado.jpg" alt="Microfonos doble bobina con cobertor" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Micrófonos</h3>
                    <p>Clásicos humbucker, de sonido amplio y reductores de ruidos con cobertor.</p>
                </div>
            </div>
            <div className="itemguitarras">
                <img src="imagenes/mics/micsinglecoilblanco.jpg" alt="Microfono single coil blanco" height={200} className="image-to-enlarge"></img>
                <div className="descripcion">
                    <h3>Micrófonos</h3>
                    <p>Single coil blanco de sonído con mucho ataque popularizado por artistas como Blackmore, Hendrix,
                        Clapton,
                        Malmsteen, Frusciante.</p>
                </div>
            </div>



        </main>
    );
}

export default Accesorios;