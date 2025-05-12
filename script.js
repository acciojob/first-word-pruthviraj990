function firstWord(str) {
  str = str.trim();
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) {
    return str;
  } else {
    return str.substring(0, spaceIndex);
  }
}

function extractFirstWord() {
  const input = document.getElementById("inputString").value;
  const result = firstWord(input);
  document.getElementById("output").textContent = "First Word: " + result;
}
