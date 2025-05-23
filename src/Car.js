     // src/components/Car.js
     import React from 'react';
     import { Rect } from 'react-konva';

     const Car = ({ x, y, onDragMove }) => {
       return (
         <Rect
           x={x}
           y={y}
           width={50}
           height={100}
           fill="blue"
           draggable
           onDragMove={onDragMove}
         />
       );
     };

     export default Car;