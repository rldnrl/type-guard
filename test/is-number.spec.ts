import { isNumber } from "../src";

describe("isNumber Test", () => {
  it("Return True", () => {
    expect(isNumber(123)).toEqual(true);
    expect(isNumber(5)).toEqual(true);
    expect(isNumber(123_345_123)).toEqual(true);
  });

  it("Return False", () => {
    expect(isNumber("typescript")).toEqual(false);
    expect(isNumber(true)).toEqual(false);
    expect(isNumber({})).toEqual(false);
    expect(isNumber(() => console.log("test"))).toEqual(false);
  });

  it("Type Alias Return False", () => {
    type User = {
      name: string;
      age: number;
    };

    const user: User = {
      name: "Bass",
      age: 23,
    };

    expect(isNumber(user)).toEqual(false);
  });
});
