import { Test } from "./TestSuite";
import { FetchWrapper } from "./FetchWrapper";

export class TestRunner {
  constructor(private endpoint: string) {}

  async execute(test: Test): Promise<string> {
    const response = await FetchWrapper.fetch(
      "http://" + this.endpoint,
      test.url,
    );

    return await response.text();
  }
}
