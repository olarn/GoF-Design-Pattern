import { JSONBuilder } from "../jsonBuilder";
import { WrappedJsonBuilder } from "./wrappedJsonBuilder";
import { EncryptableJsonBuilder } from "./encryptableJsonBuilder";

describe("jsonBuilder decorator", () => {
  it("should return encrypted JSON string", () => {
    // given
    const jsonBuilder = new JSONBuilder();
    const encryptableJsonBuilder = new EncryptableJsonBuilder(jsonBuilder);
    const givenData = {
      name: "John",
      surname: "Doe",
      age: 30,
    };
    const expectedData = {
      name: "encrypted(John)",
      surname: "encrypted(Doe)",
      age: 30,
    };

    // when
    encryptableJsonBuilder.toEncrypt = ["name", "surname"];

    // then
    expect(encryptableJsonBuilder.build(givenData)).toEqual(
      JSON.stringify(expectedData),
    );
  });

  it("should return encrypted JSON string with wrapped structure", () => {
    // given
    const jsonBuilder = new JSONBuilder();
    const wrappedJsonBuilder = new WrappedJsonBuilder(jsonBuilder);
    const encryptableJsonBuilder = new EncryptableJsonBuilder(
      wrappedJsonBuilder,
    );

    const givenData = {
      name: "John",
      surname: "Doe",
      age: 30,
    };
    const expectedWrappedData = {
      statusCode: "000",
      statusDescrription: "OK",
      data: {
        name: "encrypted(John)",
        surname: "encrypted(Doe)",
        age: 30,
      },
    };

    // when
    encryptableJsonBuilder.toEncrypt = ["name", "surname"];

    // then
    expect(encryptableJsonBuilder.build(givenData)).toEqual(
      JSON.stringify(expectedWrappedData),
    );
  });
});
