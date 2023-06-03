import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Camera from './Camera';

function Table(props) {
  const router = useRouter();
  const { tableHeight } = router.query;
  const [height, setHeight] = useState(0);
  const [showRaiseMessage, setShowRaiseMessage] = useState(false);
  const [showLowerMessage, setShowLowerMessage] = useState(false);

  useEffect(() => {
    if (tableHeight) {
      setHeight(parseInt(tableHeight));
    }
  }, [tableHeight]);

  const increaseTableHeight = () => {
    if (height < 20) {
      setHeight(height + 1);
      setShowRaiseMessage(false);
      setShowLowerMessage(false);
    } else {
      setShowRaiseMessage(true);
    }
  };

  const decreaseTableHeight = () => {
    if (height > 1) {
      setHeight(height - 1);
      setShowRaiseMessage(false);
      setShowLowerMessage(false);
    } else {
      setShowLowerMessage(true);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="flex flex-col items-center">
        <Camera />
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl bg-blue-500 mb-4">
          {height}ft
        </div>
        {showRaiseMessage && (
          <p className="text-red-500 text-center mb-2">Can no longer raise the table</p>
        )}
        {showLowerMessage && (
          <p className="text-red-500 text-center mb-2">The table cannot be lowered any more</p>
        )}
        <div className="flex justify-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={increaseTableHeight}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={decreaseTableHeight}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;
