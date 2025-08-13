import { Link } from "react-router";
import TextInputFormContainer from "../Components/TextInputForm/TextInputFormContainer";

const StartPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Start Page</h1>
        <TextInputFormContainer />
        <Link to="/play">
          <p className="text-blue-400">Play Game</p>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
