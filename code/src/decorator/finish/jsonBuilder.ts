import { JSONBuilderDecorator } from "./jsonBuilderDecorator";

export class JSONBuilder implements JSONBuilderDecorator {
    withResponseWrapper = false;
    encryptFields: string[] = [];

    build(data: any) {
        const result = { ...data };

        if (this.encryptFields.length > 0) {
            this.encryptFields.forEach(field => {
                result[field] = `encrypted(${result[field]})`;
            });
        }

        if (this.withResponseWrapper) {
            return JSON.stringify({
                statusCode: "000",
                statusDescrription: 'OK',
                data: result
            });
        }
        
        return JSON.stringify(result);
    }
}