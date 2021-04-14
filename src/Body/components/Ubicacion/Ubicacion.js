import React,{Component} from 'react'
import "leaflet/dist/leaflet.css";
import "./Ubicacion.scss";
import {MapContainer, GeoJSON, TileLayer} from "react-leaflet";
import Markers from "./Marker";
import emaillogo from "../../../assets/imgs/emailogo.png";
import telegramlogo from "../../../assets/imgs/telegramlogo.png";
import facebooklogo from "../../../assets/imgs/facebooklogo.png";

class Ubicacion extends Component {
    state= {};

countryStyle={

    fillOpacity: 1,
    color: "none"
}


    render(){
    return (

                <div>
                    <div className="">
                        <MapContainer
                        style={{height: "80vh", width:"65vw"}} className="mapfix" id="ubicacion" center= {{lat:"-34.56593241393274", lng:"-58.439060346154065"}}
                        zoom={17}
                        minZoom={6}
                        >
                         <TileLayer
      url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
                     <Markers/>
                        </MapContainer>
                    </div>
                    <div className="text-center mt-3 f40 txtmapa" style={{color:"#ffff", fontFamily:"Comforta"}}>
                        Encontranos en:
                        <div className="text-center f20 mt-2" style={{color:"#FFBA03"}}>
                            Olleros y Maria Campos, <br></br> Belgrano CABA, Argentina
                            </div> 
                        <div className="text-center mt-5">
                           <a href="mailto:nahuelp2p@gmail.com"> <img src={emaillogo} alt="" className="emailogo"/> </a>
                           <a href="https://t.me/nahuelmi"> <img src={telegramlogo} alt="" className="telegramlogo"/> </a>
                            <a href="https://www.facebook.com/nahuel.5682945"><img src={facebooklogo} alt="" className="facebooklogo"/> </a>
                        </div>
                    <div className="text-center mt-5 f40" style={{color:"#ffff", fontFamily:"Comforta"}}>
                        ¿Buscas cotización <br></br> al mayor?
                        <div className="text-center f20 mt-2" style={{color:"#FFBA03"}}>
                            Entonces <a className="hoverdoc" href="https://docs.google.com/forms/d/e/1FAIpQLSfccJnJiW5RgwYUyV5zXROf78iUzM75CsXIzj29LAxZQpLcoA/viewform?embedded=true">clickea aca </a> <br></br>para contactarnos!
                        </div>
                    </div>
                    
                    </div>

                </div>

    )
    }
}

export default Ubicacion;