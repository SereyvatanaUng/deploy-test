const trimString = (str) => {
  // Trim the whitespace in the middle of a string
  return str
    .split(" ")
    .filter((s) => s)
    .join(" ");
};

export { trimString };
