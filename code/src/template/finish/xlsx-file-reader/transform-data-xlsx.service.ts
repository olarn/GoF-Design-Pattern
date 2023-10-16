import xlsx from 'node-xlsx';
import {ITransformData} from 'template/finish/ITransformData';

class TransformDataXlsxService implements ITransformData {
    readFile(fileName: string) {
        const workSheetsFromFile = xlsx.parse(`${__dirname}/${fileName}`);
        return workSheetsFromFile as { name: string, data: string [][] | number [][] }[]
    }

    transformDataToObject(rawFileData: string[][] | number[][]) {
        return rawFileData.slice(1).map((data, index) => {
            return {
                username: data[0],
                number: Number(data[1]),
                role: data[2]
            }
        })
    }

}


export default TransformDataXlsxService
