export default function cleanSet(set, startString) {
  let myString = '';
  if (startString === '') {
    return myString;
  }
  Array.from(set)
    .filter((elem) => elem.startsWith(startString))
    .forEach((elem, idx) => {
      myString += elem.replace(startString, idx === 0 ? '' : '-');
    });
  return myString;
}
