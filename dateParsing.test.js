const myModule = require("./dateParsing.js");
const format = myModule.method;
const fromFormat = myModule.otherMethod;

/* test('testing date functions', () => {
    expect(format(new Date(), "m-dd/Y")).toBe("7-28/2020");
}); */
describe("Test format function", () => {
  it("case m-d-y", () => {
    expect(format(new Date(), "m-d/Y")).toBe("7-28/2020");
  });
  it("case mm-d-y", () => {
    expect(format(new Date(), "mm-d/Y")).toBe("07-28/2020");
  });
  it("case mmm-d-y", () => {
    expect(format(new Date(), "mmm-d/Y")).toBe("Jul-28/2020");
  });
  it("case mmmm-d-y", () => {
    expect(format(new Date(), "mmmm-d/Y")).toBe("July-28/2020");
  });
});
describe("Test fromFormat function", () => {
  it("case 1", () => {
    expect(fromFormat("07-27/2020", "")).toStrictEqual(new Date(2020, 6, 27));
  });
});
