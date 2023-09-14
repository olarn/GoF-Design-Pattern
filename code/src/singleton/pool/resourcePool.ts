// resourcePool class that comform the resourcePool.test.ts with Singleton pattern
export class ResourcePool {
    private static instance: ResourcePool;
    private constructor() {}
    public static getInstance(): ResourcePool {
        if (!ResourcePool.instance) {
            ResourcePool.instance = new ResourcePool();
        }
        return ResourcePool.instance;
    }

    private resources: any[] = [];

    public acquire(): any {
        if (this.resources.length > 2) {
            return undefined;
        }
        const resource = { id: this.resources.length };
        this.resources.push(resource);
        return resource;
    }
}
