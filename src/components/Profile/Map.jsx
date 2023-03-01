import React, { useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px'
};


function SimpleMap({ center }) {
    const mapRef = useRef();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    // const panTo = useCallback(({ lat, lng }) => {
    //     console.log("mapLocations", lat, lan)
    //     mapRef.current.panTo({ lat, lng });
    //     mapRef.current.setZoom(5);
    // }, []);
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onMapLoad}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default SimpleMap