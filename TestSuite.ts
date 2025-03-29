class Test {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export interface TestSuiteParams {
  paths: string[];
  endpoint: string;
}

export class TestSuite {
  tests: Test[];
  endpoint: string;

  constructor(params: TestSuiteParams) {
    this.tests = params.paths.map((path) => new Test(path));
    this.endpoint = params.endpoint;
  }
}
