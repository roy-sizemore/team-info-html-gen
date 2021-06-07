const Engineer = require("../lib/engineer");

test("Test GitHub username", () => {
  const engUsername = "username";
  const eng = new Engineer("Rowsdower", 1, "email@email.com", engUsername);
  expect(eng.username).toBe(engUsername);
});

test("Test getRole() function", () => {
  const engRole = "Engineer";
  const eng = new Engineer("Jeffrey", 2, "email@email.com", "username");
  expect(eng.getRole()).toBe(engRole);
});

test("Test getGithub() function", () => {
  const engUsername = "username";
  const eng = new Engineer("Pamn", 3, "email@email.com", engUsername);
  expect(eng.getGithub()).toBe(engUsername);
});
