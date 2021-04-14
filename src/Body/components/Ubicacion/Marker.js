import React from "react";
import {Marker} from "react-leaflet";
import {IconLocation} from "./IconLocation";


const Markers = () =>{
    return(
        <div>
            <Marker position={{lat:"-34.56593241393274", lng:"-58.439060346154065" }} icon={IconLocation}/>
            
        </div>
    )
}

export default Markers;