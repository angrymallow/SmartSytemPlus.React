import { APIResponse } from "./APIResponse";
import { IPattern } from "../IPattern";

export interface GetPatternsResponse extends APIResponse {
  data: IPattern[],
}