



function Home(props){
    return (
        <div className="bg-blue-500 flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-200 p-4">
          <h1> PACC #1</h1>
          <ol>
            <li>Temp: 72</li>
            <li>Humidty: 65%</li>
            <li>Pressure: 72 PSI</li>
            <li>Timer: 23:45 Remaining</li>
            <li>Table Height: 10ft 4in</li>
            </ol>
          
            </div>
          <div className="bg-gray-200 p-4">Box 2</div>
          <div className="bg-gray-200 p-4">Box 3</div>
        </div>
      </div>
    )
}
export default Home