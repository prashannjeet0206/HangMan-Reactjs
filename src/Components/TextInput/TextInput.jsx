const TextInput = ({
  type = "text",
  label,
  placeholder = "Enter your input here",
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <h1 className="text-red-400 font-semibold text-xl">{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        className="w-96 border border-gray-400 px-2 py-4 rounded-md"
      />
    </>
  );
};

export default TextInput;
