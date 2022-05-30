export interface IPatternDataDto {
  id: number,
  patternName: string,
  countryId: number,
  ivsiFormId: number,
  patternTypeId: number,
  soHeaders: string,
  uploadInfo: {
    fullName: string,
    stamp: string
  },
  bindings: PatternBindingDataDto[]
}

interface PatternBindingDataDto {
  headerId: number,
  header: HeaderDataDto,
  option: PatternBindingValueOptionDto
}

interface HeaderDataDto {
  name: string,
  canBind: boolean,
  fixValues: string,
  noDefaultValue: boolean,
  helperText: string,
  occurence: number,
}

interface PatternBindingValueOptionDto {
  type: number,
  trim: number,
  isSo: boolean,
  prefix: string,
  fixValue: {
    value: string,
    isBind: boolean,
  },
  dynamicValue: {
    findSheet: string,
    offsetColumn: number,
    offsetRow: number,
    searchKeyword: string,
  }
}