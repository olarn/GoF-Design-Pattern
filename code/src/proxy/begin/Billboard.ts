import { ContentStore } from './contentStore';

export class Billboard {
  private previousContentCount = 0;
  private currentContentIndex = 0;

  constructor(private contentStore: ContentStore) {}

  public getContent(): string {
    const contents = this.contentStore.contents();
    if (contents.length == 0) {
      this.previousContentCount = 0;
      this.currentContentIndex = 0;
      return '';
    }

    if (this.previousContentCount != contents.length) {
      this.previousContentCount = contents.length;
      this.currentContentIndex = 0;
    }

    const content = contents[this.currentContentIndex++];
    if (this.currentContentIndex == contents.length) {
      this.currentContentIndex = 0;
    }

    return content;
  }
}
