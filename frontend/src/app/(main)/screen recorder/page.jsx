'use client'
import React, { useState } from 'react';
import useScreenRecording from 'use-screen-recording';

function ScreenRecorder() {
  const {
    blobUrl, // URL of the recorded video
    startRecording,
    stopRecording,
    status, // Recording status (idle, recording, paused)
  } = useScreenRecording({ audio: true }); // Include audio if needed

  const handleStartRecording = () => {
    startRecording();
  };

  const handleStopRecording = () => {
    stopRecording();
  };

  return (
    <div>
      {status === 'idle' && <button onClick={handleStartRecording}>Start Recording</button>}
      {status === 'recording' && <button onClick={handleStopRecording}>Stop Recording</button>}
      {status === 'paused' && <p>Recording paused.</p>}
      {blobUrl && (
        <video src={blobUrl} controls autoPlay />
      )}
    </div>
  );
}

export default ScreenRecorder;
