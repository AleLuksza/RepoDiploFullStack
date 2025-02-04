import React, { useState } from 'react';
import axios from 'axios';
import "../styles/components/pages/contacto.css"


const Contacto = (props) => {
    
    const initialForm = {
        nombre:'',
        email:'',
        mensaje:''
    } 

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return(

    <main className="contacto">
        <div className="elform"> 
            <h2>Contactanos</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label>Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label>Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"  />
                </p>

                {sending ? <p>Enviando...</p>:null}
                {msg ? <p>{msg}</p>: null}

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