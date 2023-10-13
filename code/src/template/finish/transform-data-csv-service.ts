import * as Papa from 'papaparse'
import * as fs from "fs";
import * as path from "path";
import { Employee, ITransformData } from 'template/finish/ITransformData';

class DataTransformService implements ITransformData {
  public transformedData: Employee[] | null = null;

  readFile(fileName: string) {
    const file = fs.readFileSync(path.resolve(__dirname, fileName), 'utf8');
    const rawFile = Papa.parse(file);
    const resultArray = rawFile?.data as string [][];
    return resultArray.filter((data: string[]) => data.length !== 1)
  }

  transformDataToObject(csvData: string[][]) {
    this.transformedData = csvData.slice(1).map((data, index) => {
      return {
        username: data[0],
        number: Number(data[1]),
        job: data[2]
      }
    })
  }
}

export default DataTransformService;
