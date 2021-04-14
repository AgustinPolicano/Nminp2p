import React from 'react'
import "./Footer.scss";


function Footer() {
    return (
        <div>
            <div className="text-center footermt" style={{color:"#ffff", fontFamily:"Comforta"}}>
            © Todos los derechos reservados 2021 <br></br>
NahuelMinP2P, Argentina, Buenos Aires
                <div className="mt-5">
                    Diseñado por: <br></br>
                  <a className="footerhover"  href="https://www.linkedin.com/in/agustin-policano/" style={{color:"#FFBA03"}}>  Agustin Policano </a>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
