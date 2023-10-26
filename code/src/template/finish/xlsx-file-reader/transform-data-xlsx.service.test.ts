import TransformDataXlsxService from "./transform-data-xlsx.service";

describe("TransformDataXlsxService", function () {
  it("should read xlsx file correctly.", function () {
    const fileName = "../user.xlsx";

    const service = new TransformDataXlsxService();

    expect(service.readFile(fileName)).toEqual([
      {
        data: [
          ["username", "number", "job"],
          ["Mawin", 1, "Developer"],
          ["Mawae", 2, "Quality Assurance"],
        ],
        name: "Sheet1",
      },
    ]);
  });

  it("should transform to object successfully", function () {
    const service = new TransformDataXlsxService();
    const result = service.getEmployeeDataFromFile("../user.xlsx", 0);

    expect(result).toEqual([
      {
        username: "Mawin",
        job: "Developer",
        number: 1,
      },
      {
        username: "Mawae",
        job: "Quality Assurance",
        number: 2,
      },
    ]);
  });

  it("should return data without empty array.", function () {
    const service = new TransformDataXlsxService();
    const result = service.readFile("../user.xlsx");
    const data = service.cleanData(result[0].data);
    expect(data).toEqual([
      ["Mawin", 1, "Developer"],
      ["Mawae", 2, "Quality Assurance"],
    ]);
  });
});
