import React from 'react'
import Exchange from "./components/Exchange/Exchange";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Preguntas from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function index() {
    return (
        <div>
            <Exchange/>
            <Ubicacion/>
            <Preguntas/>
            <Footer/>
        </div>
    )
}

export default index

