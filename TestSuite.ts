export interface TestSuiteParams {
  openapi: string;
  paths: string[];
}


export class TestSuite {
  openapi: string;
  paths: string[];

  constructor(params: TestSuiteParams) {
    this.openapi = params.openapi;
    this.paths = params.paths;
  }
}
