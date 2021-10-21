import { APIResponse } from "./APIResponse";
import { IPatternByCountry } from "../IPatternByCountry";

export interface GetPatternsByCountryResponse extends APIResponse {
  data: IPatternByCountry[],
}