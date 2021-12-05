//Importamos React
import React, { Fragment } from 'react';
//Importamos los propTypes
import PropTypes from 'prop-types';

// Functional Component
const PrimeraApp = ( {saludo, subtitulo} ) =>{

    return (
        //Asi incluimos un Fragment de manera corta
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

//Validamos que saludo sea string y que siempre tenga que venir
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}
//Valores por defecto para las props en caso de que vengan vacios
PrimeraApp.defaultProps={
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;

