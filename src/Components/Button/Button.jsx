import ButtonStyle from "../../Helper/ButtonColour";

const Button = ({ text, onclickHandler, buttonStyle, type = "button" }) => {
  return (
    <button
      className={`p-2 ${ButtonStyle(buttonStyle)}`}
      onClick={onclickHandler}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
