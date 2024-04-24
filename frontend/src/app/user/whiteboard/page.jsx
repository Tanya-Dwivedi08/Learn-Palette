'use client'
import React, { useState, useRef, useEffect } from 'react';
import ColorPicker from 'react-color'; // Assuming you've installed react-color


function Whiteboard() {

  const [whiteboardData, setWhiteboardData] = useState(null);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(3);
  const [lines, setLines] = useState([]); // Array to store drawing data

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (isDrawing) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
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
    setLines(newLines);
    redrawLines(); // Call redrawLines to reflect the change on canvas
  };

  const redo = () => {
    // Implement redo logic (e.g., restore a previously removed line)
    // Assuming you have a mechanism to store past undo states
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

  const saveWhiteboard = () => {
    const data = whiteboardRef.current.toJSON(); // Capture whiteboard data from library
    setWhiteboardData(data); // Store data in state (optional, for UI feedback)
    sendWhiteboardDataToServer(data);
  };

  const sendWhiteboardDataToServer = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/lecture', {
        method: 'POST',
        body: JSON.stringify(data), // Send data as JSON
      });

      if (response.ok) {
        console.log('Whiteboard content saved successfully');
      } else {
        console.error('Error saving whiteboard content');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width={1200} height={800} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
      <button onClick={clearCanvas}>Clear Canvas</button>
      <button onClick={undo} disabled={lines.length === 0}>Undo</button>
      <button onClick={redo} disabled={lines.length === 0}>Redo</button>
      {/* <button onClick={redo} disabled=Implement redo disabled logic>Redo</button> */}
      <ColorPicker color={color} onChange={handleColorChange} />
      <input type="range" min="1" max="10" value={lineWidth} onChange={(e) => setLineWidth(e.target.value)} />
    </div>
  );
}

export default Whiteboard;
