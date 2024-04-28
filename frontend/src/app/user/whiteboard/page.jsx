'use client'
import ScreenRecorder from '@/app/(main)/screenrecorder/page';
import React, { useState, useRef, useEffect } from 'react';
import ColorPicker from 'react-color'; // Assuming you've installed react-color
// import React, { useState, useRef } from 'react';
// import Whiteboard from 'react-whiteboard';

function Whiteboard() {
  const canvasRef = useRef(null);
  const [IsdrawingData, setIsDrawingData] = useState([]);
  const [color, setColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(3);
  const [lines, setLines] = useState([]); // Array to store drawing data

  // useEffect(() => {
  //   const ctx = canvasRef.current.getContext('2d');
  //   ctx.
  // }, 
  // [])
  

  const handleMouseDown = (e) => {
    setIsDrawingData(true);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (IsdrawingData) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    setIsDrawingData(false);
    const ctx = canvasRef.current.getContext('2d');
    ctx.closePath();

    // Store the new line data (including color and lineWidth)
    setLines([...lines, { color, lineWidth, points: [ctx.beginPath().moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)] }]); // Example format
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setLines([]);
  };

  const undo = () => {
    // Implement undo logic (e.g., remove the last line from the lines array)
    const newLines = [...lines];
    newLines.pop();
    setLines[(newLines)];
    redrawLines(); // Call redrawLines to reflect the change on canvas
  };



  const redrawLines = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear previous drawings
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.lineWidth = line.lineWidth;
      ctx.strokeStyle = line.color;
      line.points.forEach((point) => ctx.lineTo(...point)); // Redraw each point
      ctx.stroke();
    });
  };

  useEffect(() => {
    redrawLines(); // Redraw existing lines on component mount
  }, [lines]); // Re-render canvas whenever lines state changes

  const handleColorChange = (newColor) => {
    setColor(newColor.hex); // Assuming the ColorPicker returns hex value
  };

  const saveDrawing = async () => {
    try {
      const response = await fetch('http://localhost:5000/lecture/save-canvas', {
        method: 'POST',
        body: JSON.stringify({ IsdrawingData }),
      });
  
      if (response.ok) {
        console.log('Canvas data saved successfully');
        // Clear canvas or provide user feedback
      } else {
        console.error('Error saving canvas data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-blue-200 px-3 py-1 mb-5">
      <ScreenRecorder  /></div>
      <button onClick={clearCanvas}>Clear Canvas</button>
      <button onClick={undo} disabled={lines.length === 0}>Undo</button>
      <button onClick={saveDrawing}>Save Canvas</button>

      {/* <button onClick={redo} disabled=Implement redo disabled logic>Redo</button> */}
      <ColorPicker color={color} onChange={handleColorChange} />
      <input type="range" min="1" max="10" value={lineWidth} onChange={(e) => setLineWidth(e.target.value)} />
      <canvas ref={canvasRef} width={1200} height={600} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className='border-black border-2 border-black-500/100'/>

    </div>
  );
}

export default Whiteboard;
