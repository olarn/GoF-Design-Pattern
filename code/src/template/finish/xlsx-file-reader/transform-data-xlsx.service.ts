import xlsx from 'node-xlsx';
import AbstractFileReader from '../abstract-file-reader';

class TransformDataXlsxService extends AbstractFileReader {
  readFile(fileName: string) {
    const workSheetsFromFile = xlsx.parse(`${__dirname}/${fileName}`);
    return workSheetsFromFile as { name: string, data: string [][] | number [][] }[]
  }

  cleanData(rawFileData: string[][] | number[][]): string[][] | number[][] {
    return rawFileData.slice(1);
  }
}


export default TransformDataXlsxService
