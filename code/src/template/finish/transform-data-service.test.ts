import FileReaderTemplate from './file-reader-template';
import DataTransformService from './transform-data-service';

describe('DataTransformService', function () {
  it('should call process data', function () {
    jest.spyOn(FileReaderTemplate.prototype, 'read')
    jest.spyOn(console, 'log')

    const dataTransformService = new DataTransformService();

    dataTransformService.process();

    expect(FileReaderTemplate.prototype.read).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith("Processing read file.... filename : file content of data.txt")
  });
});
