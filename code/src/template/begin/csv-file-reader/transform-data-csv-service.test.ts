import DataTransformCSVService from './transform-data-csv-service';

describe('DataTransformService', function () {
  const fileName = './user_csv.csv';
  const firstSheetIndex = 0;
  it('should return correct data format', function () {
    const dataTransformService = new DataTransformCSVService();
    const result = dataTransformService.getEmployeeDataFromFile(
      fileName,
      firstSheetIndex,
    );
    expect(result).toEqual([
      {
        username: 'Mawin',
        job: 'developer',
        number: 1,
      },
      {
        username: 'Mawae',
        job: 'Quality Assurance',
        number: 2,
      },
    ]);
  });

  it('should return data without empty array.', function () {
    const dataTransformService = new DataTransformCSVService();
    const result = dataTransformService.readFile(fileName);
    const data = dataTransformService.cleanData(result[firstSheetIndex].data);
    expect(data).toEqual([
      ['Mawin', '1', 'developer'],
      ['Mawae', '2', 'Quality Assurance'],
    ]);
  });
  it('should read file successfully', function () {
    const dataTransformService = new DataTransformCSVService();

    const result = dataTransformService.readFile(fileName);

    expect(result).toEqual([
      {
        data: [
          ['username', 'number', 'job'],
          ['Mawin', '1', 'developer'],
          ['Mawae', '2', 'Quality Assurance'],
          [''],
        ],
        name: '',
      },
    ]);
  });
});
