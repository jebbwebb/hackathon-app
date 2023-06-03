import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import Sidebar from '../Sidebar';

const Camera = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (webcamRef.current) {
          webcamRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startWebcam();
  }, []);

  return (
    <>
    <div>
      <h1>Webcam </h1>
      <Webcam audio={false} ref={webcamRef} />
    </div>
    </>
  );
};

export default Camera;
