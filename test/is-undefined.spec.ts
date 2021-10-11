import { isUndefined } from "../src";

describe("isUndefined Test", () => {
  it("Return True", () => {
    let value;
    expect(isUndefined(value)).toEqual(true);
  });

  it("Return False", () => {
    expect(isUndefined("typescript")).toEqual(false);
    expect(isUndefined(123)).toEqual(false);
    expect(isUndefined({})).toEqual(false);
    expect(isUndefined(() => console.log("test"))).toEqual(false);
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

    expect(isUndefined(user)).toEqual(false);

    type Post = {
      id: string;
      title: string;
      content: string;
      comment?: string;
    };

    const post: Post = {
      id: "1",
      title: "Post Title",
      content: "Post Content",
    };

    expect(isUndefined(post.comment)).toEqual(true);
  });
});
