export default function getStudentsByLocation(array, city) {
  return array.filter((elem) => elem.location === city);
}
