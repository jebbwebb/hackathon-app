import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/Login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    openModal();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl mb-6">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expiryDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="cvv"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
        <h2 className="text-2xl mb-4">Payment Successful!</h2>
        <p className="text-lg mb-4">Happy Growing!</p>
        <button
          onClick={closeModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Payment;
