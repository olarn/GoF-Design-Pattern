export interface Employee {
  username: string,
  number: number,
  job: string
}

export interface SheetRawData {
  name: string,
  data: string[][] | number[][]
}

export interface ITransformData {
  transformDataToObject: (csvData: string[][]) => void
  readFile: (fileName: string) => SheetRawData[]
}
