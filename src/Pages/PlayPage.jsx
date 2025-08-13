import { Link } from "react-router";

const PlayPage = () => {
  return (
    <>
      <h1>Play-Page</h1>
      <Link to="/start">
        <p className="text-blue-400">Start-game</p>
      </Link>
    </>
  );
};

export default PlayPage;
