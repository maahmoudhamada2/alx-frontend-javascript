export default function getStudentIdsSum(array) {
  return array.reduce((total, elem) => (typeof total === 'object' ? total.id : total) + elem.id);
}
