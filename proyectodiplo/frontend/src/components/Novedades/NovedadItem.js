import React from 'react';


const NovedadItem = (props) => {
    const { title, subtitle, image, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <img src={image} />
            <div className='cuerpo'>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}

export default NovedadItem;