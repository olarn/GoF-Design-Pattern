import { Billboard } from './Billboard';
import { ContentStore } from './contentStore';

describe('[Proxy - lab] Kiosk Machine', () => {
  it('should display the default content from the server', () => {
    const contentStore = new ContentStore();
    const billboard = new Billboard(contentStore);

    expect(billboard.getContent()).toEqual('content1');
    expect(billboard.getContent()).toEqual('content2');
    expect(billboard.getContent()).toEqual('content3');

    expect(billboard.getContent()).toEqual('content1');
  });

  it('should show empty string if no content', () => {
    class EmptyContentStore extends ContentStore {
      public contents(): string[] {
        return [];
      }
    }

    const contentStore = new EmptyContentStore();
    const billboard = new Billboard(contentStore);

    expect(billboard.getContent()).toEqual('');
  });

  it('should display cached content from the proxy content store.', () => {
    // write test code here...
  });
});