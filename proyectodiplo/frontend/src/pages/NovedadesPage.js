import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/Novedades/NovedadItem';
import '../styles/components/pages/novedadesitem.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() =>{
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className='holdernovedades'>
            <h2>Calendario academico</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                image={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default NovedadesPage;