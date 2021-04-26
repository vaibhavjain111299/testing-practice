const capitalize = require("./capitalize");

test("Capitalize lowercase one-word string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize lowercase multi-word string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test("No effect if string starts with number", () => {
    expect(capitalize("4xyz")).toBe("4xyz");
});