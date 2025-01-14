import React from "react";
import "../styles/components/pages/contacto.css"

const Contacto = (props) => {
    return(

    <main className="contacto">
        <div className="elform"> 
            <h2>Contactanos</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"></input>
                </p>
            </form>
        </div>
        <div className="otrasvias">
            <h2>También podes contactarte a traves de las siguienes vías:</h2>
            <ul>
                <li>Teléfono: 12345678</li>
                <li>email: flacozetaguitarras@nosecuanto.com</li>
                <li>O visitá nuestros talleres en: Avenida Siempreviva 742 (Springfield)</li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;