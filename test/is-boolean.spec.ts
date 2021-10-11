import { isBoolean } from "../src";

describe("isBoolean Test", () => {
  it("Return True", () => {
    expect(isBoolean(false)).toEqual(true);
    expect(isBoolean(true)).toEqual(true);
  });

  it("Return False", () => {
    expect(isBoolean("typescript")).toEqual(false);
    expect(isBoolean(123)).toEqual(false);
    expect(isBoolean({})).toEqual(false);
    expect(isBoolean(() => console.log("test"))).toEqual(false);
  });

  it("Type Alias", () => {
    type User = {
      name: string;
      age: number;
    };

    const user: User = {
      name: "Bass",
      age: 23,
    };

    expect(isBoolean(user)).toEqual(false);

    type Boolean = boolean;
    const isUser: Boolean = false;
    expect(isBoolean(isUser)).toEqual(true);
  });
});
