import { JSONBuilder } from "./jsonBuilder";

describe("jsonBuilder", () => {
  const jsonBuilder = new JSONBuilder();

  const givenData = {
    name: "John",
    surname: "Doe",
    age: 30,
  };

  it("should return plain JSON string", () => {
    // when
    jsonBuilder.withResponseWrapper = false;
    // then
    expect(jsonBuilder.build(givenData)).toEqual(JSON.stringify(givenData));
  });

  it("should return JSON string with wrapped structure", () => {
    const expectedData = {
      statusCode: "000",
      statusDescrription: "OK",
      data: {
        name: "John",
        surname: "Doe",
        age: 30,
      },
    };
    // when
    jsonBuilder.withResponseWrapper = true;
    // then
    expect(jsonBuilder.build(givenData)).toEqual(JSON.stringify(expectedData));
  });

  it("should return JSON string with encrypted fields", () => {
    const expectedData = {
      name: "encrypted(John)",
      surname: "encrypted(Doe)",
      age: 30,
    };
    // when
    jsonBuilder.withResponseWrapper = false;
    jsonBuilder.encryptFields = ["name", "surname"];
    // then
    expect(jsonBuilder.build(givenData)).toEqual(JSON.stringify(expectedData));
  });

  it("should return JSON string with wrapped structure and encrypted fields", () => {
    const expectedData = {
      statusCode: "000",
      statusDescrription: "OK",
      data: {
        name: "encrypted(John)",
        surname: "encrypted(Doe)",
        age: 30,
      },
    };
    // when
    jsonBuilder.withResponseWrapper = true;
    jsonBuilder.encryptFields = ["name", "surname"];
    // then
    expect(jsonBuilder.build(givenData)).toEqual(JSON.stringify(expectedData));
  });
});
