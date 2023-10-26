abstract class AbstractFileReader {

  protected abstract readFile(fileName: string): string;

  protected abstract cleanData(rawFileData: string[][]): string;

}
