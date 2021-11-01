import { createContext } from "react"
import { ICountry } from "../types/interfaces/ICountry";
import { IForm } from "../types/interfaces/IForm";
import { IPatternType } from "../types/interfaces/IPatternType";

const LookupContext = createContext<{countries: ICountry[], forms: IForm[], types: IPatternType[]} | null>(null); 

export default LookupContext