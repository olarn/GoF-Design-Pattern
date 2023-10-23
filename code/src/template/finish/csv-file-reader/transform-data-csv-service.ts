import * as Papa from 'papaparse'
import * as fs from "fs";
import * as path from "path";
import { SheetRawData } from 'template/finish/ITransformData';
import AbstractFileReader from '../abstract-file-reader';

class DataTransformCSVService extends AbstractFileReader {

  override readFile(fileName: string): SheetRawData[] {
    const file = fs.readFileSync(path.resolve(__dirname, fileName), 'utf8');
    const fileMapped = []
    const rawFile = Papa.parse(file);
    fileMapped.push(
        {
          name: "",
          data: rawFile?.data as string [][] | number[][]
        }
    )
    return fileMapped
  }

  override cleanData(rawFileData: string[][] | number[][]): string[][] | number[][] {
    return rawFileData.length === 0 ? [] : rawFileData?.slice(1, -1);
  }

}

export default DataTransformCSVService;
