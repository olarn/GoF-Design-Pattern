import { Employee, SheetRawData } from 'template/finish/ITransformData';

abstract class AbstractFileReader {

  protected abstract readFile(fileName: string): SheetRawData[];

  protected abstract cleanData(rawFileData: string[][] | number[][]): string[][] | number[][];

  protected transformDataToObject(rawFileData: string[][] | number[][]): Employee[] {
    return rawFileData?.map((data, index) => {
      return {
        username: String(data[0]),
        number: Number(data[1]),
        job: String(data[2])
      }
    })
  };


  public getEmployeeDataFromFile(dataFileName: string, sheetIndex: number): Employee[] {
    const rawFileData = this.readFile(dataFileName);
    const cleanData = this.cleanData(rawFileData[sheetIndex]?.data);
    return this.transformDataToObject(cleanData);
  }
}

export default AbstractFileReader;
