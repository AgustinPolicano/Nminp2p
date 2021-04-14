import L from "leaflet";
import IconMap from "../../../assets/imgs/marker-google.png";

export const IconLocation = L.icon({
    iconUrl: IconMap,
    iconRetinaUrl: IconMap,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [20,30],
    className:"leaflet-venu.icon"

})

export default IconLocation;