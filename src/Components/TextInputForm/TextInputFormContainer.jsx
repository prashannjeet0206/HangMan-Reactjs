import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputTYpe] = useState("text");
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleFormTextInput(e) {
    console.log(e.target.value);
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
    />
  );
}

export default TextInputFormContainer;
