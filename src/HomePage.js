// src/HomePage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    const locationValue = event.target.value;
    setSelectedLocation(locationValue);

    if (locationValue) {
      navigate('/button');
    }
  };

  return (
    <div>
      <div className="header">Driver</div>
      <div className="center">
        <div className="select-location">Select Location</div>
        <div className="dropdown">
          <select value={selectedLocation} onChange={handleLocationChange} className="dropbtn">
            <option value="">Locations</option>
            <option value="Location1">Location 1</option>
            <option value="Location2">Location 2</option>
            <option value="Location3">Location 3</option>
            <option value="Location4">Location 4</option>
            <option value="Location5">Location 5</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
