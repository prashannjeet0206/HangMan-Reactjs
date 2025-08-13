import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router";

function TextInputFormContainer() {
  const [inputType, setInputTYpe] = useState("password");
  const [inputData, setInputData] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (inputData) {
      navigate("/play", { state: { data: inputData } });
    }
    setInputData("");
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
