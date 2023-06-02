
const Sidebar=()=>{
    return(
        <div className="side-container flex flex-col items-start ml-4">
        <div className="side-menu">
          <ol className="space-y-2">
          <li className="bg-gray-200 p-2"><a href="Home">Home</a></li>
          <li className="bg-gray-200 p-2"><a href="Temp">Temp/Humidity/Pressure</a></li>
          <li className="bg-gray-200 p-2"><a href="Lights">Lights</a></li>
          <li className="bg-gray-200 p-2"><a href="Timer">Timer</a></li>
          <li className="bg-gray-200 p-2"><a href="Table">Table Height</a></li>
          <li className="bg-gray-200 p-2"><a href="Camera">Camera</a></li>
          <li className="bg-gray-200 p-2"><a href="Playlist">Music</a></li>
          </ol>
        </div>
      </div>
    )
   
}
export default Sidebar