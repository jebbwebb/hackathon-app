import React, { useState } from 'react';
import Sidebar from '../Sidebar';
const Education = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data
    console.log({
      name,
      email,
      date,
      time,
      description,
    });

    // Reset the form fields
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setDescription('');

    // Display the success message
    setSuccessMessage('Scheduling was successful');
  };

  return (
    <>
    <Sidebar></Sidebar>
    <div className="my-4">
      <h1 className="text-2xl font-bold mb-4">Schedule a Meeting with a Master Grower</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full h-32 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Schedule Meeting
        </button>
      </form>

      {successMessage && (
        <div className="mt-4 p-4 bg-green-200 text-green-800 rounded">{successMessage}</div>
      )}
    </div>
    </>
  );
};

export default Education;
