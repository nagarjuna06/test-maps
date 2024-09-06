import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import data, { maxLatitude, maxLongitude } from "./data";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {
  const customIcon = (url) => {
    return L.icon({
      iconUrl: url,
      iconSize: [30, 30],
      className: "map-icon",
    });
  };
  return (
    <MapContainer
      center={[maxLatitude, maxLongitude]}
      zoom={13}
      // scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url="/maps/{z}/{x}/{y}@2x.png" />
      <MarkerClusterGroup>
        {data.map((each, i) => (
          <Marker position={each.location} key={i} icon={customIcon(each.icon)}>
            <Popup autoPan>{each.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
