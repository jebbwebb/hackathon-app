import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../Sidebar';

const Detail = () => {
  const router = useRouter();
  const { temperature, humidity, pressure, timer, tableHeight, lights } = router.query;
  const [currentTemperature, setCurrentTemperature] = useState(Number(temperature) || 0);
  const [currentHumidity, setCurrentHumidity] = useState(Number(humidity) || 0);
  const [currentPressure, setCurrentPressure] = useState(Number(pressure) || 0);
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  const increaseTemperature = () => {
    if (currentTemperature === 80) {
      setMessage("You cannot set the temperature any higher");
    } else {
      setCurrentTemperature(currentTemperature + 1);
      setMessage('');
    }
  };

  const decreaseTemperature = () => {
    setCurrentTemperature(currentTemperature - 1);
    setMessage('');
  };

  const increaseHumidity = () => {
    if (currentHumidity === 75) {
      setMessage2("You cannot set the humidity any higher");
    } else {
      setCurrentHumidity(currentHumidity + 1);
      setMessage2('');
    }
  };

  const decreaseHumidity = () => {
    setCurrentHumidity(currentHumidity - 1);
    setMessage2('');
  };

  const increasePressure = () => {
    if (currentPressure === 90) {
      setMessage3("You cannot set the pressure any higher");
    } else {
      setCurrentPressure(currentPressure + 1);
      setMessage3('');
    }
  };

  const decreasePressure = () => {
    setCurrentPressure(currentPressure - 1);
    setMessage3('');
  };

  const getTemperatureColor = () => {
    if (currentTemperature >= 80) {
      return 'bg-red-800';
    } else if (currentTemperature >= 75) {
      return 'bg-orange-500';
    } else {
      return 'bg-blue-800';
    }
  };

  const getHumidityColor = () => {
    if (currentHumidity >= 75) {
      return 'bg-red-800';
    } else if (currentHumidity >= 70) {
      return 'bg-orange-500';
    } else {
      return 'bg-blue-800';
    }
  };

  const getPressureColor = () => {
    if (currentPressure >= 90) {
      return 'bg-red-800';
    } else if (currentPressure >= 80) {
      return 'bg-orange-500';
    } else {
      return 'bg-blue-800';
    }
  };
  const handleSidebarClick = () => {
    router.push({
      pathname: '/another-page',
      query: {
        temperature,
        humidity,
        pressure,
        timer,
        tableHeight,
        lights,
      },
    });
  };

  return (
    <>
    <Sidebar onSidebarClick={handleSidebarClick} />
    <div className="flex">
      <div className="flex flex-col items-center w-5/6 p-8">
        <h2 className="text-2xl font-bold mb-4">Temperature Gauge</h2>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={increaseTemperature}
            disabled={currentTemperature >= 81}
          >
            Increase
          </button>
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl ${getTemperatureColor()}`}
          >
            {currentTemperature}
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={decreaseTemperature}
          >
            Decrease
          </button>
        </div>
        {message && <p className="text-red-600 mt-2">{message}</p>}

        <h2 className="text-2xl font-bold mb-4">Humidity Gauge</h2>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={increaseHumidity}
            disabled={currentHumidity >= 80}
          >
            Increase
          </button>
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl ${getHumidityColor()}`}
          >
            {currentHumidity}
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={decreaseHumidity}
          >
            Decrease
          </button>
        </div>
        {message2 && <p className="text-red-600 mt-2">{message2}</p>}

        <h2 className="text-2xl font-bold mb-4">Pressure Gauge</h2>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={increasePressure}
            disabled={currentPressure >= 91}
          >
            Increase
          </button>
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl ${getPressureColor()}`}
          >
            {currentPressure}
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={decreasePressure}
          >
            Decrease
          </button>
        </div>
        {message3 && <p className="text-red-600 mt-2">{message3}</p>}
      </div>
      
    </div>
    </>
  );
};

export default Detail;
