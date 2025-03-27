export interface OpenapiSpecificationParams {
  openapi: string;
  paths: string[];
}


export class OpenapiSpecification {
  openapi: string;
  paths: string[];

  constructor(params: OpenapiSpecificationParams) {
    this.openapi = params.openapi;
    this.paths = params.paths;
  }
}
