

function Detail(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="detail-container bg-blue-200 p-4">
        <h1>PACC #1</h1>
        <ol>
          <li>Temp: 72</li>
          <li>Humidity: 65%</li>
          <li>Pressure: 72 PSI</li>
          <li>Timer: 23:45 Remaining</li>
          <li>Table Height: 10ft 4in</li>
        </ol>
      </div>
     
    </div>
  );
}

export default Detail;
