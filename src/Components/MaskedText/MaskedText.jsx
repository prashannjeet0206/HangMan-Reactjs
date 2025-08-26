import MaskedTextUtility from "./MaskedTextUtility";

const MaksedText = ({ text, guessText }) => {
  const guessWords = MaskedTextUtility(text, guessText);
  return (
    <>
      <span>
        <p>{guessWords}</p>
      </span>
    </>
  );
};

export default MaksedText;
