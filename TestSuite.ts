import { TestRunner } from "./TestRunner";

export class Test {
  url: string;
  message: string;
  statusCode: number;

  constructor(url: string, message: string, statusCode: number) {
    this.url = url;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export interface TestSuiteParams {
  testCases: Test[];
  endpoint: string;
}

export class TestSuite {
  tests: Test[];
  endpoint: string;
  testRunner: TestRunner;

  constructor(params: TestSuiteParams) {
    this.tests = params.testCases;
    this.endpoint = params.endpoint;
    this.testRunner = new TestRunner(this.endpoint);
  }

  async run(): Promise<string[]> {
    const promises = this.tests.map((test: Test) =>
      this.testRunner.execute(test),
    );
    return Promise.all(promises);
  }
}
