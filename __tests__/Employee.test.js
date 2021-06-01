const Employee = require("../lib/Employee");

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
  const testValue = 01;
  const emp = new Employee("Kyle", testValue);
  expect(emp.id).toBe(testValue);
});

test("Add Employee email", () => {
  const testValue = "email@email.com";
  const emp = new Employee("Francis", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Testing getName() function", () => {
  const testValue = "Sarah";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Testing getId() function", () => {
  const testValue = 02;
  const emp = new Employee("Jackie", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Testing getEmail() function", () => {
  const testValue = "email@email.com";
  const emp = new Employee("Rhaze", 03, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("Testing getRole() function", () => {
  const testValue = "Employee";
  const emp = new Employee("John", 04, "test@test.com");
  expect(emp.getRole()).toBe(testValue);
});
