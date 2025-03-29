import { TestSuite } from "./TestSuite";

export class Service {
  public static parse(input : string): TestSuite {
    const parsedInput = JSON.parse(input);
    const paths =  Object.keys(parsedInput.paths);
    const openapi =  parsedInput.openapi;
    return new TestSuite({
      openapi,
      paths
    });
  }
}
