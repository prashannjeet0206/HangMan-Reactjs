import { Link, useLocation } from "react-router";

const PlayPage = () => {
  const location = useLocation();
  const recieveData = location.state?.data;
  return (
    <>
      <h1>Play-Page</h1>
      <div className="flex flex-row gap-3">
        <h2>Recieved Data:</h2>
        <p className="text-red-500">{recieveData}</p>
      </div>
      <Link to="/start">
        <p className="text-blue-400">Start-game</p>
      </Link>
    </>
  );
};

export default PlayPage;
