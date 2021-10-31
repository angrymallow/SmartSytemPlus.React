import { APIResponse } from "../types/interfaces/api/APIResponse";
import { ICountry } from "../types/interfaces/ICountry";
import { IForm } from "../types/interfaces/IForm";
import { IPatternType } from "../types/interfaces/IPatternType";
import countries from "./countries";
import forms from "./forms";
import patternTypes from "./patternTypes";

const getPatternLookupAsync = (): Promise<APIResponse<{ countries: ICountry[], forms: IForm[], types: IPatternType[] }>> => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve({success: true, data: {
        countries: countries,
        types: patternTypes,
        forms: forms,
      }})

    }, 3000)
  )
}

export { getPatternLookupAsync }