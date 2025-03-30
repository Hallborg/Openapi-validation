import { TestSuite, Test } from "./TestSuite";

export class Service {
  public static parse(input: string, endpoint: string): TestSuite {
    const parsedInput = JSON.parse(input);
    const mapPaths = (paths: any) => {
      const mapped = [];

      for (const path in paths) {
        // @ts-ignore
        const response = paths[path].get.responses["200"];
        const message =
          response.content["application/json"].schema.properties.message
            .example;
        const statusCode = 200;

        mapped.push(new Test(path, message, statusCode));
      }

      return mapped;
    };

    const testCases: Test[] = mapPaths(parsedInput.paths);
    return new TestSuite({
      testCases,
      endpoint,
    });
  }
}
