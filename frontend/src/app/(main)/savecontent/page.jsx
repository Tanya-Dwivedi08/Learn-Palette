'use client'
import React, { useRef } from 'react';
import { Whiteboard } from 'react-whiteboard';

const WhiteboardComponent = () => {
  const whiteboardRef = useRef(null);

  // Function to save content to localStorage
  const saveWhiteboardContent = () => {
    const content = whiteboardRef.current.getContent();
    localStorage.setItem('whiteboardContent', JSON.stringify(content));
    console.log('Content saved to localStorage');
  };

  // Function to load content from localStorage
  const loadWhiteboardContent = () => {
    const savedContent = localStorage.getItem('whiteboardContent');
    if (savedContent) {
      const parsedContent = JSON.parse(savedContent);
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
        <button onClick={saveWhiteboardContent}>Save Content</button>
        <button onClick={loadWhiteboardContent}>Load Content</button>
      </div>
    </div>
  );
};

export default WhiteboardComponent;
