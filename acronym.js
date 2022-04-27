export function parse(phrase) {
  if (typeof phrase !== "undefined" && phrase !== undefined) {
    const match = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g);
    return !match
      ? ""
      : match.reduce((acronym, word) => (acronym += word[0].toUpperCase()), "");
  }
  return "";
}
