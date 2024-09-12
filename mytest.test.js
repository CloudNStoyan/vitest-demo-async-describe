import { expect, describe, test } from "vitest";

function asyncFn() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
}

describe("first describe with async func inside it", async () => {
  await asyncFn();
  test("runs", () => {
    console.log("1");
    expect(true).toBe(true);
  });
});

describe("second describe with async describes but no actual promises", async () => {
  describe("first nested describe", async () => {
    test("runs", async () => {
      console.log("2");
      expect(true).toBe(true);
    });
  });

  describe("second nested describe", () => {
    test("runs", async () => {
      console.log("3");
      expect(true).toBe(true);
    });
  });
});
