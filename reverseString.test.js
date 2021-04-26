const reverseString = require("./reverseString");

test("Capitalize lowercase one-word string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("Capitalize lowercase multi-word string", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
});

test("No effect if string strings starts with number", () => {
    expect(reverseString("4xyz")).toBe("zyx4");
});