import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plantType, setPlantType] = useState('');
  const [farmingType, setFarmingType] = useState('');
  const [plantEntries, setPlantEntries] = useState([]);

  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the values based on the selected plant and farming types
    let temperature = 72;
    let humidity = 65;
    let pressure = 72;
    let timer = '23:45 Remaining';
    let tableHeight = '10ft ';
    let lights = '12 hour intervals';

    switch (plantType) {
      case 'basil':
        break;
      case 'potatoes':
        temperature = 45;
        humidity = 23;
        pressure = 60;
        timer = '55:45 Remaining';
        tableHeight = '2ft ';
        lights = '15 hour intervals';
        break;
      case 'cannabis':
        temperature = 71;
        humidity = 45;
        pressure = 55;
        timer = '12:45 Remaining';
        tableHeight = '12ft ';
        lights = '24 hour intervals';
        break;
      case 'roses':
        temperature = 65;
        humidity = 55;
        pressure = 44;
        timer = '28:35 Remaining';
        tableHeight = '5ft';
        lights = '18 hour intervals';
        
        break;
      default:
        // Handle the default case or add additional cases if needed
        break;
    }

    // Add the current plant entry to the plantEntries array
    const newPlantEntry = {
      temperature,
      humidity,
      pressure,
      timer,
      tableHeight,
      lights,
    };
    setPlantEntries([...plantEntries, newPlantEntry]);

    closeModal();
  };

  const handleViewDetails = (index) => {
    const entry = plantEntries[index];

    router.push({
      pathname: `/Detail/${index}`,
      query: {
        temperature: entry.temperature,
        humidity: entry.humidity,
        pressure: entry.pressure,
        timer: entry.timer,
        tableHeight: entry.tableHeight,
        lights: entry.lights,
      },
    });
  };

  return (
    <div>
      <button
        className="absolute top-0 right-0 mt-2 mr-2 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Add New Plant
      </button>
      <div className="flex flex-col">
        {plantEntries.map((entry, index) => (
          <div className="bg-blue-200 p-4 relative mb-2" key={index}>
            <h1>PACC #{index + 1}</h1>
            <ol>
              <li>Temp: {entry.temperature}</li>
              <li>Humidity: {entry.humidity}%</li>
              <li>Pressure: {entry.pressure} PSI</li>
              <li>Timer: {entry.timer}</li>
              <li>Table Height: {entry.tableHeight}</li>
              <li>Light Schedule: {entry.lights}</li>
            </ol>
            <button
  onClick={() => handleViewDetails(index)}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
>
  View
</button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Plant"
      >
       <h2 className="text-2xl mb-4">Add New Plant</h2>
<form onSubmit={handleSubmit} className="flex flex-col">
  <label className="mb-2">
    Plant Type:
    <select
      value={plantType}
      onChange={(e) => setPlantType(e.target.value)}
      className="block w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="">Select Plant Type</option>
      <option value="basil">Basil</option>
      <option value="cannabis">Cannabis</option>
      <option value="potatoes">Potatoes</option>
      <option value="roses">Roses</option>
    </select>
  </label>
  <label className="mb-2">
    Farming Type:
    <select
      value={farmingType}
      onChange={(e) => setFarmingType(e.target.value)}
      className="block w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="">Select Farming Type</option>
      <option value="aquaponics">Aquaponics</option>
      <option value="aeroponics">Aeroponics</option>
      <option value="hydroponics">Hydroponics</option>
    </select>
  </label>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
  >
    Submit
  </button>
</form>
<button
  onClick={closeModal}
  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
>
  Close
</button>
      </Modal>
    </div>
  );
}

export default Home;
