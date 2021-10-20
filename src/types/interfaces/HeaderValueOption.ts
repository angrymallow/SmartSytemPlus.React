import { TrimValueEnum } from "../enums/TrimValueEnum";
import { ValueTypeEnum } from "../enums/ValueTypeEnum";


export interface HeaderValueOption {
  valueType: ValueTypeEnum,
  defaultValue: DefaultValueOption,
  changingValue: ChangingValueOption,
  trim: TrimValueEnum,
  isSO: boolean,
  prefix: string,
}

export interface DefaultValueOption {
  value: string,
  bind: boolean
}

export interface ChangingValueOption {
  searchKeyword: string,
  findSheet: string,
  offset: OffsetOption,
}


export interface OffsetOption {
  row: number,
  column: number
}
