const Manager = require("../lib/Manager");

test('Tests office number', () => {
  const manOffice = 100;
  const man = new Manager("Sam", 1, "email@email.com", manOffice);
  expect(man.officeNumber).toBe(manOffice);
});

test('Tests getRole() function', () => {
  const manRole = "Manager";
  const man = new Manager("Harsh", 2, "email@email.com", 200);
  expect(man.getRole()).toBe(manRole);
});

test('Tests getOffice() function', () => {
  const manOffice = 300;
  const man = new Manager("Guillermo", 3, "email@email.com", manOffice);
  expect(man.getOfficeNumber()).toBe(manOffice);
});
