const caesar = require("./caesar");

test("all lowercase", () => {
    expect(caesar("attack at dawn")).toBe("nggnpx ng qnja");
});

test("mix of lowercase and upper", () => {
    expect(caesar("Stay at home")).toBe("Fgnl ng ubzr");
});

test("LONG UPPERCASE STRING ETC ETC", () => {
    expect(
        caesar(
            "WE RECOMMEND THESE BOOKS IF YOU ARE INTERESTED IN FINDING OUT MORE"
        )
    ).toBe(
        "JR ERPBZZRAQ GURFR OBBXF VS LBH NER VAGRERFGRQ VA SVAQVAT BHG ZBER"
    );
});