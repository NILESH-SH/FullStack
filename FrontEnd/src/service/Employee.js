import axios from "axios";

const EMPLOYEE_API_BASE_URI = "http://localhost:8080/api/employee/employees";

function addEmployee(employee) {
  return axios.post(EMPLOYEE_API_BASE_URI, employee);
}
function listEmployee() {
  return axios.get(EMPLOYEE_API_BASE_URI);
}

export { addEmployee, listEmployee };
