     // src/components/Game.js
     import React, { useState, useEffect } from 'react';
     import { Stage, Layer } from 'react-konva';
     import Car from './Car';
     import Obstacle from './Obstacle';

     const lanes = [100, 200, 300, 400]; // Позиции полос

     const Game = () => {
       const [carPosition, setCarPosition] = useState({ x: 200, y: 400 });
       const [obstacles, setObstacles] = useState([]);

       useEffect(() => {
         const interval = setInterval(() => {
           setObstacles((prevObstacles) => {
             // Удаляем препятствия, которые вышли за пределы экрана
             const newObstacles = prevObstacles.filter(obstacle => obstacle.y < window.innerHeight);

             // Добавляем новые препятствия
             if (Math.random() < 0.5) { // 50% шанс появления нового препятствия
               const lane = lanes[Math.floor(Math.random() * lanes.length)];
               newObstacles.push({ x: lane, y: -100 });
             }

             // Двигаем все препятствия вниз
             return newObstacles.map(obstacle => ({ ...obstacle, y: obstacle.y + 5 }));
           });
         }, 100);

         return () => clearInterval(interval);
       }, []);

       useEffect(() => {
         const checkCollision = () => {
           for (let obstacle of obstacles) {
             if (
               carPosition.x < obstacle.x + 50 &&
               carPosition.x + 50 > obstacle.x &&
               carPosition.y < obstacle.y + 100 &&
               carPosition.y + 100 > obstacle.y
             ) {
               alert('Столкновение! Игра окончена.');
               setObstacles([]); // Сброс препятствий
               setCarPosition({ x: 200, y: 400 }); // Сброс позиции машинки
               break;
             }
           }
         };

         const interval = setInterval(checkCollision, 100);
         return () => clearInterval(interval);
       }, [carPosition, obstacles]);

       const handleDragMove = (e) => {
         const newX = e.target.x();
         const closestLane = lanes.reduce((prev, curr) => Math.abs(curr - newX) < Math.abs(prev - newX) ? curr : prev);
         setCarPosition({ x: closestLane, y: carPosition.y });
       };

       return (
         <Stage width={window.innerWidth} height={window.innerHeight}>
           <Layer>
             <Car x={carPosition.x} y={carPosition.y} onDragMove={handleDragMove} />
             {obstacles.map((obstacle, index) => (
               <Obstacle key={index} x={obstacle.x} y={obstacle.y} />
             ))}
           </Layer>
         </Stage>
       );
     };

     export default Game;