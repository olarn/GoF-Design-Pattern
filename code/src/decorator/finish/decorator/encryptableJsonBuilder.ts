import { JSONBuilderDecorator } from "./jsonBuilderDecorator";

export class EncryptableJsonBuilder implements JSONBuilderDecorator {    
    constructor(private jsonBuilder: JSONBuilderDecorator) {}
    public toEncrypt: string[] = [];

    build(data: any): string {
        const result = { ...data };

        if (this.toEncrypt.length > 0) {
            this.toEncrypt.forEach(field => {
                result[field] = `encrypted(${result[field]})`;
            });
        }

        return this.jsonBuilder.build(result);
    }
}