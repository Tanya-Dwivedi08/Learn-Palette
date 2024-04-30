'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';

const ScreenRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setIsRecording(true);
      recorderRef.current = new MediaRecorder(stream);
      recorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);
      recorderRef.current.start();
    } catch (error) {
      console.error("Error accessing screen:", error);
    }
  };

  const stopRecording = async () => {
    recorderRef.current.stop();
    setIsRecording(false);
    const blob = new Blob(chunks.current, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
    chunks.current = []; // Clear chunks for next recording
  };

  const handleDownload = () => {
    if (isRecording) {
      alert("Recording in progress. Please stop recording first.");
      return;
    }
    // Implement logic for downloading existing recordings from server (if applicable)
  };

  useEffect(() => {
    return () => {
      // Cleanup function to release resources when component unmounts
      if (recorderRef.current) {
        recorderRef.current.stop();
      }
    };
  }, []);

  return (
    <div >
      <button onClick={startRecording} disabled={isRecording}>
        {isRecording ?   <button className='bg-red-500 text-white px-5 text-lg  rounded-xl '>Stop</button>:  <button className='bg-green-500 text-white px-5 text-lg  rounded-xl '>Start</button>}
      
       
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
       <button className='bg-black text-white text-2xl rounded-xl mx-4 mt-1 '><MdDownloadForOffline /></button>
      </button>
      <button onClick={handleDownload}>Download Existing Recordings</button>
      {/* Add any UI elements for recording options (optional) */}
    </div>
  );
};

export default ScreenRecorder;

