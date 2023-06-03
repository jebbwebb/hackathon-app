import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();
  const { temperature, humidity, pressure, timer, tableHeight, lights,index } = router.query;

  const handleLinkClick = (page) => {
    const queryParams = {
        index,
      temperature,
      humidity,
      pressure,
      timer,
      tableHeight,
      lights,
    };

    const query = new URLSearchParams(queryParams).toString();
    router.push({
      pathname: `/${page}`,
      search: query,
    });
  };

  return (
    <nav className="bg-gray-200 fixed top-0 right-0 w-1/6 h-screen flex flex-col justify-start items-end p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" onClick={() => handleLinkClick(`Detail/${index}`)}>Temp/Humidity/Pressure</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Timer')}>Timers</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Electrical')}>Electrical</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Table')}>Table Height</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Music')}>Music</a>
        </li>
        
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Education')}>Education</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('Detail/Payment')}>Payments</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
