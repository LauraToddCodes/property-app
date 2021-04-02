import React, { useState } from "react";
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import properties from "../properties.json";
import MarkerInfo from "./MarkerInfo";

function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    
    return (
        <GoogleMap 
            defaultZoom={13}
            defaultCenter={{ lat: 51.232712, lng: -0.540188 }}
        >
            {properties.map((property) => (
                <Marker 
                    key={property.id} 
                    position={{
                        lat: property.lat, 
                        lng: property.lng
                    }}
                    onClick ={() => {
                        setSelectedProperty(property);
                    }}
                    icon={{
                        url: "/images/header/houseIcon.png",
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
            ))}

            {selectedProperty && (
                <InfoWindow
                    position={{
                        lat: selectedProperty.lat, 
                        lng: selectedProperty.lng
                    }}
                    onCloseClick={() => {
                        setSelectedProperty(null);
                    }}
                >
                    <MarkerInfo 
                        img={selectedProperty.imgs[0]} 
                        beds={selectedProperty.bedrooms} 
                        type={selectedProperty.type}     
                    />
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map() {
    return (
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo`}
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />
    )
}

export default Map;