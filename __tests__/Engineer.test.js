const Engineer = require("../lib/Engineer");

test("Test GitHub username", () => {
  const testValue = "username";
  const emp = new Engineer("Rowsdower", 01, "email@email.com", testValue);
  expect(emp.github).toBe(testValue);
});

test("Test getRole() function", () => {
  const testValue = "Engineer";
  const emp = new Engineer("Jeffrey", 02, "email@email.com", "username");
  expect(emp.getRole()).toBe(testValue);
});

test("Test getGithub() function", () => {
  const testValue = "username";
  const emp = new Engineer("Pamn", 03, "email@email.com", testValue);
  expect(emp.getGithub()).toBe(testValue);
});
