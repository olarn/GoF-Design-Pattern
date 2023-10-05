import FileReaderTemplate from "./file-reader-template";

class DataTransformService {
  process() {
    this.readFile();
    this.transformDataToObjects();
    console.log("process data");
  }

  readFile() {
    const fileReader = new FileReaderTemplate("data.txt");
    const fileReaderResult = fileReader.read();
    console.log(`Processing read file.... filename : ${fileReaderResult}`);
  }

  transformDataToObjects() {
    console.log("processing transform data to objects....");
  }
}

export default DataTransformService;
