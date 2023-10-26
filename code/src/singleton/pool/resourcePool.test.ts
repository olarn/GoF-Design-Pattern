import { ResourcePool } from './resourcePool';

describe('ResourcePool', () => {
  it('should provide only 3 objects and no more', () => {
    // given
    const resourcePool = ResourcePool.getInstance();
    const resource1 = resourcePool.acquire();
    const resource2 = resourcePool.acquire();
    const resource3 = resourcePool.acquire();

    // when
    const resource4 = resourcePool.acquire();

    // then
    expect(resource4).toBeUndefined();
  });
});
