import { TrimValueEnum } from "../enums/TrimValueEnum";
import { ValueTypeEnum } from "../enums/ValueTypeEnum";
import { IPatternBindingDynamicValueOption } from "./IPatternBindingDynamicValueOption";
import { IPatternBindingFixValueOption } from "./IPatternBindingFixValueOption";

export interface IPatternBindingValueOption {
  type: ValueTypeEnum,
  trim: TrimValueEnum,
  isSO: boolean,
  prefix?: string,
  fixValue?: IPatternBindingFixValueOption,
  dynamicValue?: IPatternBindingDynamicValueOption,
}