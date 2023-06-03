import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
function VoltageCircle() {
  const [voltage, setVoltage] = useState(120);
  const [price, setPrice] = useState(5);

  const increaseVoltage = () => {
    setVoltage((prevVoltage) => prevVoltage + 1);
    setPrice((prevPrice) => prevPrice + 1);
  };

  const decreaseVoltage = () => {
    if (voltage > 0) {
      setVoltage((prevVoltage) => prevVoltage - 1);
      setPrice((prevPrice) => prevPrice - 1);
    }
  };

  const emergencyShutdown = () => {
    setVoltage(0);
    setPrice(0);
  };

  useEffect(() => {
    if (voltage % 3 === 0) {
      setPrice((prevPrice) => prevPrice + 1);
    }
  }, [voltage]);

  return (
    <>
    <Sidebar></Sidebar>
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl bg-blue-500 mb-4">
        {voltage}VH
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={increaseVoltage}
        >
          Increase
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={decreaseVoltage}
        >
          Decrease
        </button>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded mt-4"
        onClick={emergencyShutdown}
      >
        Emergency Shutdown
      </button>
      <div className="text-xl mt-4">
        Price: ${price}/per day
      </div>
    </div>
    </>
  );
}

export default VoltageCircle;
