/* eslint-disable */
export default function updateStudentGradeByCity(array, city, newGrades) {
  const fullArray = array.filter((student) => student.location === city);
  fullArray.map((student) => {
    for (const stdGrade of newGrades) {
      if (stdGrade.studentId === student.id) {
        student.grade = stdGrade.grade;
        break;
      } else {
        student.grade = 'N/A';
      }
    }
  });
  return fullArray;
}
