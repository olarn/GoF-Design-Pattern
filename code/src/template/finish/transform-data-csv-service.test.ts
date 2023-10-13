import DataTransformService from 'template/finish/transform-data-csv-service';

describe('DataTransformService', function () {
  it('should set correct data format', function () {
    const dataTransformService = new DataTransformService();

    const result = dataTransformService.readFile("user_csv.csv");
    dataTransformService.transformDataToObject(result)

    expect(dataTransformService.transformedData).toEqual([
      {
        username: "Mawin",
        job: "developer",
        number: 1,
      },
      {
        username: "Mawae",
        job: "Quality Assurance",
        number: 2,
      }
    ])
  });

  it('should read file successfully', function () {
    const dataTransformService = new DataTransformService();

    const result = dataTransformService.readFile("user_csv.csv");

    expect(result).toEqual([
      ['username', 'number', 'job'],
      ['Mawin', '1', 'developer'],
      ['Mawae', '2', 'Quality Assurance']
    ])
  })
});
