function getElementWidth(content, padding, border) {
  const parseContent = Number.parseFloat(content);
  const parsePadding = Number.parseFloat(padding);
  const parseBorder = Number.parseFloat(border);
  const result = parseContent + parsePadding * 2 + parseBorder * 2;

  return result;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
