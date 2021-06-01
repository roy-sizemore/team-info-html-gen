const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "username";
  const emp = new Engineer("Rowsdower", 01, "email@email.com", testValue);
  expect(emp.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const emp = new Engineer("Jeffrey", 02, "email@email.com", "username");
  expect(emp.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "username";
  const emp = new Engineer("Pamn", 03, "email@email.com", testValue);
  expect(emp.getGithub()).toBe(testValue);
});
