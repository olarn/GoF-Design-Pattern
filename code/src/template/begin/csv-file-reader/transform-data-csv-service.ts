import * as Papa from 'papaparse';
import * as fs from 'fs';
import * as path from 'path';
import { Employee, SheetRawData } from 'template/finish/ITransformData';

class DataTransformCSVService {
  readFile(fileName: string): SheetRawData[] {
    const file = fs.readFileSync(path.resolve(__dirname, fileName), 'utf8');
    const fileMapped = [];
    const rawFile = Papa.parse(file);
    fileMapped.push({
      name: '',
      data: rawFile?.data as string[][] | number[][],
    });
    return fileMapped;
  }

  cleanData(rawFileData: string[][] | number[][]): string[][] | number[][] {
    return rawFileData.length === 0 ? [] : rawFileData?.slice(1, -1);
  }

  transformDataToObject(rawFileData: string[][] | number[][]): Employee[] {
    return rawFileData?.map((data, index) => {
      return {
        username: String(data[0]),
        number: Number(data[1]),
        job: String(data[2]),
      };
    });
  }

  public getEmployeeDataFromFile(
    dataFileName: string,
    sheetIndex: number,
  ): Employee[] {
    const rawFileData = this.readFile(dataFileName);
    const cleanData = this.cleanData(rawFileData[sheetIndex]?.data);
    return this.transformDataToObject(cleanData);
  }
}

export default DataTransformCSVService;
