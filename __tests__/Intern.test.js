const Intern = require("../lib/intern");

test("Tests inputting school", () => {
  const intSchool = "Harvard University";
  const int = new Intern("Nicole", 1, "email@email.edu", intSchool);
  expect(int.school).toBe(intSchool);
});

test("Tests getRole() function", () => {
  const intRole = "Intern";
  const int = new Intern("Derek", 2, "email@email.edu", "Oxford University");
  expect(int.getRole()).toBe(intRole);
});

test("Tests getSchool() function", () => {
  const intSchool = "MIT";
  const int = new Intern("Draylen", 3, "email@email.edu", intSchool);
  expect(int.getSchool()).toBe(intSchool);
});
