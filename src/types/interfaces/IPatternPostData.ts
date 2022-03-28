import { TrimValueEnum } from "../enums/TrimValueEnum";
import { ValueTypeEnum } from "../enums/ValueTypeEnum";

interface IPatternPostData {
  patternName: string,
  countryId: number,
  ivsiFormId: number,
  patternTypeId: number,
  patternValues: IPatternValuePostData[]
}

interface IPatternValuePostData {
  setValueType: ValueTypeEnum,
  headerId: number,
  fixValue?: string,
  isBind?: boolean,
  keyword?: string,
  sheetName?: string,
  colOffset?: number,
  rowOffset?: number,
  isSOHeader: boolean,
  trim?: TrimValueEnum,
  prefix?: string,
}

export type { IPatternPostData,  IPatternValuePostData };