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

  constructor(params: TestSuiteParams) {
    this.tests = params.testCases;
    this.endpoint = params.endpoint;
  }
}
