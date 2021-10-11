import { isString } from "../src";

describe("isString Test", () => {
  it("Return True", () => {
    expect(isString("typescript")).toEqual(true);
    expect(isString("this is test code")).toEqual(true);
    expect(isString("this is type guard")).toEqual(true);
  });

  it("Return False", () => {
    expect(isString(123)).toEqual(false);
    expect(isString(true)).toEqual(false);
    expect(isString({})).toEqual(false);
    expect(isString(() => console.log("test"))).toEqual(false);
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

    expect(isString(user)).toEqual(false);
  });
});
