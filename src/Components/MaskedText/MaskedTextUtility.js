function MaskedTextUtility(inputText, guessedText) {
  guessedText = guessedText.map((letter) => letter.toUpperCase());

  let guessedTextSet = new Set(guessedText);

  const result = inputText
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedTextSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });
  return result;
}

export default MaskedTextUtility;
