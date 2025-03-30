import { Service } from "../Service";
import { FetchWrapper } from "../FetchWrapper";

vi.mock("../FetchWrapper");

const specification = JSON.stringify({
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
});
describe("openapi specification ", () => {
  test("that the json is valid", () => {
    const result = Service.parse(specification, "localhost:8000");
    expect(result).toEqual({
      endpoint: "localhost:8000",
      testRunner: {
        endpoint: "localhost:8000",
      },
      tests: [
        {
          url: "/hello",
          statusCode: 200,
          message: "Hello, world!",
        },
        {
          url: "/goodbye",
          statusCode: 200,
          message: "Goodbye, world!",
        },
      ],
    });
  });
  test("that run() reports back a result", async () => {
    vi.spyOn(FetchWrapper, "fetch").mockResolvedValue({
      text: vi.fn().mockResolvedValueOnce("OK").mockResolvedValueOnce("FAILED"),
    } as any);

    const testSuite = Service.parse(specification, "localhost:8000");

    const runResult: string[] = await testSuite.run();

    expect(runResult).toEqual(["OK", "FAILED"]);
  });
});
