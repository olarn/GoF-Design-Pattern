import { ContentStore } from './contentStore';

export class ProxyContentStore implements ContentStore {
  private contentStore = new ContentStore();
  private cachedContents: string[] = [];

  public contents(): string[] {
    if (this.cachedContents.length == 0) {
      this.cachedContents = [];
      for (const content of this.contentStore.contents()) {
        this.cachedContents.push('cached - ' + content);
      }
    }

    return this.cachedContents;
  }
}
