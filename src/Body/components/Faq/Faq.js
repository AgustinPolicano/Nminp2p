import React from 'react'
import "./Faq.scss";
import Script from "./PreguntasScript";


function Faq() {
    return (
        <div>
            <div className="text-center f40 titulofaq" id="faq" style={{color:"#ffff", fontFamily:"Comforta"}}>
                Preguntas Frecuentes
            </div>
            <Script/>
        </div>
    )
}

export default Faq
