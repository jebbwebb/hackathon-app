import React from 'react';

const Timer = () => {
  const timeRemaining = '23:45'; // Replace with your actual time remaining value
  const totalDuration = 60 * 24; // Assuming 24 hours (1440 minutes) as total duration
  const remainingMinutes = parseInt(timeRemaining.split(':')[0]) * 60 + parseInt(timeRemaining.split(':')[1]);
  const percentageRemaining = ((totalDuration - remainingMinutes) / totalDuration) * 100;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="timer-container">
        <div className="time-remaining text-center">
          <h1>Time Remaining: {timeRemaining}</h1>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${percentageRemaining}%`,
                backgroundColor: 'green',
              }}
            ></div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
            Edit Timer
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
