import Sidebar from '../Sidebar';

function Music(props) {
  return (
    <>
      <Sidebar />
      <div>
        <h2>Music</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/NS-9g_TB2p8"
            title="YouTube Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Music;
