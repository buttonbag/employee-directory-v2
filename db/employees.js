const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export function getEmployees() {
  return employees;
}

// req.params are always strings, so we need to convert `id` into a number
// before we can use it to find the employee
export function getEmployee(id) {
  return employees.find((e) => e.id === +id);
}

export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

/**
 * creates a new employee with the given name
 * assigns a new id
 */
export function addEmployee(name) {
  const employee = {id: employees.length+1, name};
  employees.push(employee);
  return employee;
}

/* WARNING: this must remain the default export in order for the tests to work! */
export default employees;
