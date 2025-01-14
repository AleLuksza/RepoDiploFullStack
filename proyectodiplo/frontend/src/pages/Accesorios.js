import React from "react";
import "../styles/components/pages/accesorios.css"

const Accesorios = (props) => {
    return (
        <main className="holder3">
        <div className="colunauno">
            <div className="accesorios">
                <img src="imagenes/mics/clavijasblancasnylon.jpg" alt="Clavijero guitarra clasica blanco"></img>

                <p>Clavijero típico con clavijas blancas para guitarra clasica.</p>
            </div>
            <div className="accesorios">
                <img src="imagenes/mics/clavijasnegrasnylon.jpeg" alt="Clavijero guitarra clasica negro"></img>

                <p>Una particularidad estética que no hace al sonido pero si a la personalización de tu guitarra</p>
            </div>
            <div className="accesorios">
                <img src="imagenes/mics/clavijaspavonadas.jpg" alt="Clavijas pavonadas para guitarra eléctrica"></img>

                <p>De aspecto crudo y sombrío, las mas elegidas por los rockeros aunque son aptas para todos.</p>
            </div>
        </div>
        <div className="colunados">
            <div className="accesorios">
                <img src="imagenes/mics/michumbuckeralavista.jpg" alt="Microfonos doble bobina sin cobertor"></img>

                <p>Clasicos humbucker, de sonido amplio y reductores de ruidos.</p>
            </div>
            <div className="accesorios">
                <img src="imagenes/mics/michumbuckerblindado.jpg" alt="Microfonos doble bobina con cobertor"></img>

                <p>Clasicos humbucker, de sonido amplio y reductores de ruidos con cobertor.</p>
            </div>
            <div className="accesorios">
                <img src="imagenes/mics/micsinglecoilblanco.jpg" alt="Microfono single coil blanco"></img>

                <p>Single coil blanco de sonido con mucho ataque popularizdo por artistas como Blackmore, Hendrix,
                    Clapton,
                    Malmsteen, Frusciante.</p>
            </div>
        </div>


    </main>
    );
}

export default Accesorios;