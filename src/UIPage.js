// src/UIPage.js
import React from 'react';
import './UIPage.css'; // Import the CSS file for styling

function UIPage() {
  const handleRectangleClick = (rectangleNumber) => {
    // Handle click event for the clicked rectangle
    console.log(`Clicked on rectangle ${rectangleNumber}`);
  };

  // Generate an array of 15 rectangles
  const rectangles = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <div className="parcel-locker">
      {rectangles.map((rectangleNumber) => (
        <div
          key={rectangleNumber}
          className="small-rectangle"
          onClick={() => handleRectangleClick(rectangleNumber)}
        >
          {/* You can customize the content of each small rectangle if needed */}
          {rectangleNumber}
        </div>
      ))}
    </div>
  );
}

export default UIPage;
