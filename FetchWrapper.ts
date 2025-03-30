import fetch from "node-fetch";
import { Response } from "node-fetch";

export class FetchWrapper {
  static async fetch(endpoint: string, url: string): Promise<Response> {
    return await fetch(endpoint + url);
  }
}
