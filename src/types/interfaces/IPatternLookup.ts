import { ICountry } from "./ICountry";
import { IForm } from "./IForm";
import { IPatternType } from "./IPatternType";

interface IPatternLookup {
  countries: ICountry[],
  forms: IForm[],
  types: IPatternType[], 
}

export default IPatternLookup;