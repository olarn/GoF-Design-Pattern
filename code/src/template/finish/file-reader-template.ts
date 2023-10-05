class FileReaderTemplate {
  private readonly file: string;

  constructor(file: string) {
    this.file = file;
  }

  read(): string {
    return `file content of ${this.file}`;
  }
}

export default FileReaderTemplate;
