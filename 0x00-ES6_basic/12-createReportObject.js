export default function createReportObject(employeesList) {
  const empObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return empObject;
}
