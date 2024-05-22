import React from 'react';
import { animated } from 'react-spring'; // Import for animations (optional)

const CurvedText = ({ text, radiusX, radiusY, cx, cy, fontSize, ...props }) => {
    const path = `M ${cx},${cy} C ${cx + radiusX},${cy} ${cx + radiusX},${cy - radiusY} ${cx},${cy - radiusY} C ${cx - radiusX},${cy - radiusY} ${cx - radiusX},${cy} ${cx},${cy}`;
  
    return (
      <svg viewBox={`0 0 ${radiusX * 2} ${radiusY * 2}`}>
        {/* Optional animation using react-spring */}
        <animated.path stroke="black" fill="none" d={path} {...props} />
        <text fontSize={fontSize}> {/* Set fontSize here */}
          <textPath href="#curvedTextPath">
            {text}
          </textPath>
        </text>
        <defs>
          <path id="curvedTextPath" d={path} />
        </defs>
      </svg>
    );
  };
  

export default CurvedText;
