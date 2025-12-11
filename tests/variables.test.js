import { firstName, lastName, fullName, age, city, output } from "../src/index.js";

test("firstName should be non-empty string", () => {
  expect(typeof firstName).toBe("string");
  expect(firstName.length).toBeGreaterThan(0);
});

test("lastName should be non-empty string", () => {
  expect(typeof lastName).toBe("string");
  expect(lastName.length).toBeGreaterThan(0);
});

test("fullName should contain firstName and lastName", () => {
  expect(fullName.includes(firstName)).toBe(true);
  expect(fullName.includes(lastName)).toBe(true);
});

test("age should be a number > 0", () => {
  expect(typeof age).toBe("number");
  expect(age).toBeGreaterThan(0);
});

test("city should be non-empty string", () => {
  expect(typeof city).toBe("string");
  expect(city.length).toBeGreaterThan(0);
});

test("output should contain fullName, age and city", () => {
  expect(output.includes(fullName)).toBe(true);
  expect(output.includes(age.toString())).toBe(true);
  expect(output.includes(city)).toBe(true);
});
