const Employee = require("../lib/employee");

test("New Employee", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("Add Employee name", () => {
  const empName = "Deborah";
  const emp = new Employee(empName);
  expect(emp.name).toBe(empName);
});

test("Add Employee ID", () => {
  const empId = 1;
  const emp = new Employee("Kyle", empId);
  expect(emp.id).toBe(empId);
});

test("Add Employee email", () => {
  const empEmail = "email@email.com";
  const emp = new Employee("Francis", 1, empEmail);
  expect(emp.email).toBe(empEmail);
});

test("Testing getName() function", () => {
  const empName = "Sarah";
  const emp = new Employee(empName);
  expect(emp.getName()).toBe(empName);
});

test("Testing getId() function", () => {
  const empId = 2;
  const emp = new Employee("Jackie", empId);
  expect(emp.getId()).toBe(empId);
});

test("Testing getEmail() function", () => {
  const empEmail = "email@email.com";
  const emp = new Employee("Rhaze", 3, empEmail);
  expect(emp.getEmail()).toBe(empEmail);
});

test("Testing getRole() function", () => {
  const empRole = "Current Employee";
  const emp = new Employee("John", 4, "test@test.com");
  expect(emp.getRole()).toBe(empRole);
});
