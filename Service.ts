import { TestSuite } from "./TestSuite";

export class Service {
  public static parse(input : string, endpoint: string): TestSuite {
    const parsedInput = JSON.parse(input);
    const paths =  Object.keys(parsedInput.paths);
    return new TestSuite({
      paths,
      endpoint
    });
  }
}
