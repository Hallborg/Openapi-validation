import { OpenapiSpecification } from "./OpenapiSpecification";

export class Service {
  public static parse(input : string): OpenapiSpecification {
    const parsedInput = JSON.parse(input);
    const paths =  Object.keys(parsedInput.paths);
    const openapi =  parsedInput.openapi;
    return new OpenapiSpecification({
      openapi,
      paths
    }
    );
  }
}
