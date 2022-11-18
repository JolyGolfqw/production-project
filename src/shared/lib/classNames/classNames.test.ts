import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2"
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered focus"
    expect(classNames("someClass", { hovered: true, focus: true }, ["class1", "class2"])).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass class1 class2 hovered"
    expect(classNames("someClass", { hovered: true, focus: false }, ["class1", "class2"])).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass class1 class2 hovered"
    expect(classNames("someClass", { hovered: true, focus: undefined }, ["class1", "class2"])).toBe(expected);
  });
});
