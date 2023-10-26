import DataTransformCSVService from "./transform-data-csv-service";

describe("DataTransformService", function () {
  it("should return correct data format", function () {
    const dataTransformService = new DataTransformCSVService();

    const result = dataTransformService.getEmployeeDataFromFile(
      "../user_csv.csv",
      0,
    );
    expect(result).toEqual([
      {
        username: "Mawin",
        job: "developer",
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
    const dataTransformService = new DataTransformCSVService();
    const result = dataTransformService.readFile("../user_csv.csv");
    const data = dataTransformService.cleanData(result[0].data);
    expect(data).toEqual([
      ["Mawin", "1", "developer"],
      ["Mawae", "2", "Quality Assurance"],
    ]);
  });
  it("should read file successfully", function () {
    const dataTransformService = new DataTransformCSVService();

    const result = dataTransformService.readFile("../user_csv.csv");

    expect(result).toEqual([
      {
        data: [
          ["username", "number", "job"],
          ["Mawin", "1", "developer"],
          ["Mawae", "2", "Quality Assurance"],
          [""],
        ],
        name: "",
      },
    ]);
  });
});
