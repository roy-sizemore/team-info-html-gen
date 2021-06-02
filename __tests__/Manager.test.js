const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

test('Tests office number', () => {
  const manOffice = 100;
  const man = new Manager("Sam", 01, "email@email.com", manOffice);
  expect(man.officeNumber).toBe(manOffice);
});

test('Tests getRole() function', () => {
  const manRole = "Manager";
  const man = new Manager("Harsh", 02, "email@email.com", 200);
  expect(man.getRole()).toBe(manRole);
});

test('Tests getOffice() function', () => {
  const manOffice = 300;
  const man = new Manager("Guillermo", 03, "email@email.com", manOffice);
  expect(man.getOfficeNumber()).toBe(manOffice);
});
