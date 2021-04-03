import React, { createRef, useRef } from 'react';
 
export default function Formulario() {
    //const text = useRef();
    const text = createRef();
 
    let manejarEnvio = (event) => {
        event.preventDefault();
 
        console.log(`Se ha enviado el valor: ${text.current.value}`);        
    }
 
    return (
        <form onSubmit={manejarEnvio}>
            <label>Nombre: </label>
 
            <input type="text" ref={text}/>
            <button type="submit">Enviar</button>
        </form>
    );
}