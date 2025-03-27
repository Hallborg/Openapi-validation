import { describe, test, expect } from "vitest";
import { Service } from "./../Service";
import { OpenapiSpecification } from "../OpenapiSpecification";

describe("openapi specification ", () => {
  test("that the json is valid", () => {
    const input = {
      input: "from client",
    };
    const result = Service.parse(
      JSON.stringify({
        openapi: "3.0.0",
        info: {
          title: "Simple API",
          description: "A simple API with a GET request example",
          version: "1.0.0",
        },
        paths: {
          "/hello": {
            get: {
              summary: "Returns a greeting message",
              operationId: "getGreeting",
              responses: {
                "200": {
                  description: "A greeting message",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          message: {
                            type: "string",
                            example: "Hello, world!",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "/goodbye": {
            get: {
              summary: "Returns a goodbye message",
              operationId: "getGoodbye",
              responses: {
                "200": {
                  description: "A goodbye message",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          message: {
                            type: "string",
                            example: "Goodbye, world!",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })
    );
    expect(result).toStrictEqual(
      new OpenapiSpecification({
        openapi: "3.0.0",
        paths: ["/hello", "/goodbye"],
      })
    );
  });
});
