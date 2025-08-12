function ButtonStyle(style) {
  if (style === "Primary") {
    return "bg-blue-500 text-white";
  } else if (style === "Secondary") {
    return "bg-gray-300";
  } else if (style === "Error") {
    return "bg-red-500";
  } else if (style === "warning") {
    return "bg-yellow-500";
  }
}

export default ButtonStyle;
