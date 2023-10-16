import * as Papa from 'papaparse'
import * as fs from "fs";
import * as path from "path";
import {Employee, ITransformData} from 'template/finish/ITransformData';

class DataTransformCSVService implements ITransformData {
    public transformedData: Employee[] | null = null;

    readFile(fileName: string) {
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

    transformDataToObject(rawFileData: string[][] | number[][]) {
        this.transformedData = rawFileData?.slice(1, -1).map((data, index) => {
            return {
                username: String(data[0]),
                number: Number(data[1]),
                job: String(data[2])
            }
        })
    }
}

export default DataTransformCSVService;
