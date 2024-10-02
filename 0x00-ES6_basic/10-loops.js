export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arrayCopy = array;
  for (const elem of array) {
    arrayCopy[i] = appendString + elem;
    i += 1;
  }
  return arrayCopy;
}
