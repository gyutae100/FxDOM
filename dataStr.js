export default (data) =>
  "$dataStr_" +
  JSON.stringify(data)
    .replace(/\(/g, "()")
    .replace(/\(/g, "()")
    .replace(/'/g, "(1)")
    .replace(/"/g, "(2)");
