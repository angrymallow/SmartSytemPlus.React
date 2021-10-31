import { APIResponse } from "../types/interfaces/api/APIResponse";
import { IPatternType } from "../types/interfaces/IPatternType";

const patternTypes: IPatternType[] = [
  {
    id: 1,
    code: "211",
    name: "Multi Files, Single Sheet, Single Unit",
  },
  {
    id: 2,
    code: "212",
    name: "Multi Files, Single Sheet, Multi Units",
  },
  {
    id: 3,
    code: "121",
    name: "Single File, Multi Sheets, Single Unit",
  },
  {
    id: 4,
    code: "112",
    name: "Single File, Single Sheet, Multi Units",
  },
]

const getPatternsAsync = (): Promise<APIResponse<IPatternType[]>> => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve({success: true, data: patternTypes})
    }, 1000)
  )
}

export default patternTypes;

export { getPatternsAsync }