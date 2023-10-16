export interface Employee {
    username: string,
    number: number,
    job: string
}

export interface ITransformData {
    transformDataToObject: (csvData: string[][]) => void
    readFile: (fileName: string) => { name: string, data: string[][] | number[][] }[]
}
