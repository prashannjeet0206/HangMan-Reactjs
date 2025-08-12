import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const TextInputForm = ({
  handleSubmit,
  handleFormTextInput,
  handleShowHide,
  inputType,
}) => {
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Start the Game"
          onChangeHandler={handleFormTextInput}
          placeholder="Enter Your Clue here"
        />
      </div>
      <div>
        <Button
          text={inputType === "text" ? "Hide" : "Show"}
          buttonStyle="warning"
          onclickHandler={handleShowHide}
        />
      </div>
      <div>
        <Button text="submit" buttonStyle="Primary" type="submit" />
      </div>
    </form>
  );
};

export default TextInputForm;
