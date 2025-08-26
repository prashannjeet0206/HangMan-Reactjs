import { Link, useLocation } from "react-router";
import MaksedText from "../Components/MaskedText/MaskedText";

const PlayPage = () => {
  // *simple data fetching
  const location = useLocation();
  const recieveData = location.state?.data;

  // //* fetching data from query params of url
  // const [URLSearchParams] = useSearchParams();

  return (
    <>
      <h1>Play-Page</h1>
      <div className="flex flex-row gap-3">
        <h2>Recieved Data:</h2>
        {/* <p className="text-red-500">{URLSearchParams.get("text")}</p> */}
        <MaksedText text={recieveData} guessText={["m", "Y"]} />
      </div>
      <Link to="/start">
        <p className="text-blue-400">Start-game</p>
      </Link>
    </>
  );
};

export default PlayPage;
