import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputTYpe] = useState("text");
  const [inputData, setInputData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputData);
  }

  function handleFormTextInput(e) {
    setInputData(e.target.value);
  }

  function handleShowHide() {
    if (inputType === "text") {
      setInputTYpe("password");
    } else {
      setInputTYpe("text");
    }
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleSubmit={handleSubmit}
      handleFormTextInput={handleFormTextInput}
      handleShowHide={handleShowHide}
      inputData={inputData}
    />
  );
}

export default TextInputFormContainer;
