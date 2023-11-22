// src/ButtonPage.js
import React from 'react';
import UIPage from './UIPage'; // Import the UIPage component
import './ButtonPage.css'; // Import the CSS file for styling

function ButtonPage() {
  return (
    <div>
      <div className="center">
        <UIPage /> {/* Render the UIPage component */}
        <div className="button-container">
          <button className="put-in-button">Pick Up</button>
          <button className="pick-up-button">Put In</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
