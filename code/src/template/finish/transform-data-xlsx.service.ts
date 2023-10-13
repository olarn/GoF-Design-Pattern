import xlsx from 'node-xlsx';
import { ITransformData } from 'template/finish/ITransformData';

class TransformDataXlsxService implements ITransformData {
  readFile(fileName: string) {
    const workSheetsFromFile: {
      data: any[][],
    }[] = xlsx.parse(`${__dirname}/${fileName}`);
    return workSheetsFromFile.length !== 0 ? workSheetsFromFile[0]?.data : []
  }

  transformDataToObject(csvData: string[][]) {
    return csvData.slice(1).map((data, index) => {
      return {
        username: data[0],
        number: Number(data[1]),
        role: data[2]
      }
    })
  }

}


export default TransformDataXlsxService
