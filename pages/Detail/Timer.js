import { useRouter } from 'next/router';
import Sidebar from '../Sidebar';
import React, { useState, useEffect } from 'react';
import Camera from './Camera';
import Modal from 'react-modal';

function Timer(props) {
  const router = useRouter();
  const { lights, timer } = router.query;
  const [timerValue, setTimerValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (timer) {
      setTimerValue(timer);
    }
  }, [timer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      const timeParts = timerValue.split(':');
      const minutes = parseInt(timeParts[0]);
      const seconds = parseInt(timeParts[1]);

      if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        return;
      }

      if (seconds === 0) {
        setTimerValue(`${minutes - 1}:59`);
      } else {
        setTimerValue(`${minutes}:${seconds - 1}`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timerValue]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission based on the selected option
    // You can implement your logic here

    // Close the modal
    closeModal();
  };

  return (
    <>
      <Sidebar></Sidebar>
      <div className="flex flex-col items-center">
        <Camera></Camera>
        <div className="bg-blue-200 p-4 mb-4">
          <div className="text-lg text-blue-800 mb-2">
            The lights will be changed based on <span className="font-bold">{lights}</span>
          </div>
          <div className="text-sm text-gray-700">
            {timerValue} Remaining til next interval
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={openModal}
            >
              Alerts
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
       isOpen={isModalOpen}
       onRequestClose={closeModal}
       className="modal bg-white rounded shadow-lg p-6"
       overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl mb-4">Alerts</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="alertOption" className="block text-gray-700 text-sm font-bold mb-2">
              Select Alert Option:
            </label>
            <select
              id="alertOption"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select an Option</option>
              <option value="textChange"> Light Change</option>
              <option value="tenMinutes">1 Hour before next change</option>
              <option value="randomIntervals">Random Intervals</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Timer;
