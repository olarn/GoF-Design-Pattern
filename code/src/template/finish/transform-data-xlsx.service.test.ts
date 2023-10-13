import TransformDataXlsxService from "./transform-data-xlsx.service";

describe('TransformDataXlsxService', function () {
  it('should read xlsx file correctly.', function () {
    const fileName = "user.xlsx";

    const service = new TransformDataXlsxService();

    expect(service.readFile(fileName)).toEqual(
        [
          ["username", "number", "job"],
          ["Mawin", 1, "Developer"],
          ["Mawae", 2, "Quality Assurance"]
        ]
    )
  });

  it('should transform to object successfully', function () {
    const service = new TransformDataXlsxService();
    const rawXlsx = service.readFile("user.xlsx")
    const result = service.transformDataToObject(rawXlsx)

    expect(result).toEqual([
      {
        username: "Mawin",
        role: "Developer",
        number: 1,
      },
      {
        username: "Mawae",
        role: "Quality Assurance",
        number: 2,
      }
    ])
  });
});
