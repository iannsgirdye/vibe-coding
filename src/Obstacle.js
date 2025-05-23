     // src/components/Obstacle.js
     import React from 'react';
     import { Rect } from 'react-konva';

     const Obstacle = ({ x, y }) => {
       return (
         <Rect
           x={x}
           y={y}
           width={50}
           height={100}
           fill="red"
         />
       );
     };

     export default Obstacle;