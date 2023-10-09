import * as Papa from 'papaparse'
import * as fs from "fs";
import * as path from "path";

class DataTransformService {
  private rawCsvFile: string[][] = [[]];
  public transformedData: { column: string[], data: [] } | null = null;

  process() {
    console.log("Processing data...");
    this.readFile();
    this.transformDataToObjects();
  }

  readFile() {
    const file = fs.readFileSync(path.resolve(__dirname, 'user_csv.csv'), 'utf8');
    Papa.parse(file, {
      complete: (results) => {
        this.rawCsvFile = results.data as string[][]
      }
    });
  }

  transformDataToObjects() {
    this.transformedData = {
      column: this.rawCsvFile[0],
      data: []
    }
  }
}

export default DataTransformService;
