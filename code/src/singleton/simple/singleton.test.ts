import { Singleton } from "./singleton";

describe("Singleton", () => {
  it("should always has the same object", () => {
    // given
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    // when
    instance1.secretKey = "1234567890";

    // then
    expect(instance2.secretKey).toBe(instance1.secretKey);
  });
});
