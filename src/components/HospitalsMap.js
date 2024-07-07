import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const HospitalsMap = ({ hospitals }) => {
  if (hospitals.length === 0) {
    return <div>No hospitals found.</div>;
  }

  const center = {
    lat: hospitals[0].latitude,
    lng: hospitals[0].longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCubocZsfnSUBt2Hq_zExbfrK7mch18KGw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={{ lat: hospital.latitude, lng: hospital.longitude }}
            title={hospital.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

HospitalsMap.propTypes = {
  hospitals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
  })).isRequired
};

export default HospitalsMap;
