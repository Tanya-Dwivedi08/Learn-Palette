'use client'
import React, { useRef } from 'react';
import Whiteboard from './Whiteboard';




const canvas = () => {
  const whiteboardRef = useRef(null);

  // Function to save content to localStorage
  const savecanvas = () => {
    const content = whiteboardRef.current.getContent();
    localStorage.setItem('canvas', JSON.stringify(content));
    console.log('Content saved to localStorage');
  };

  // Function to load content from localStorage
  const loadcanvas = () => {
    const savecanvas = localStorage.getItem('canvas');
    if (savecanvas) {
      const parsedContent = JSON.parse(savecanvas);
      whiteboardRef.current.setContent(parsedContent);
      console.log('Content loaded from localStorage');
    } else {
      console.log('No saved content found');
    }
  };

  return (
    <div>
      <Whiteboard ref={whiteboardRef} />
      <div>
        <button onClick={savecanvas}>Save Content</button>
        <button onClick={loadcanvas}>Load Content</button>
      </div>
    </div>
  );
};

export default canvas;
