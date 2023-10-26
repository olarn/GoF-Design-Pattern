import { JSONBuilderDecorator } from "./jsonBuilderDecorator";

export class WrappedJsonBuilder implements JSONBuilderDecorator {
  constructor(private jsonBuilder: JSONBuilderDecorator) {}

  build(data: any): string {
    const result = {
      statusCode: "000",
      statusDescrription: "OK",
      data: data,
    };

    return this.jsonBuilder.build(result);
  }
}
