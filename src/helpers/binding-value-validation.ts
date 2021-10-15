export function validateSheetName(sheetName: string) {
  return sheetName.length > 0;
}

export function validateSearchKeyword(keyword: string) {
  return keyword.length > 0;
}

export function validateDefaultValue(defaultValue: string) {
  return defaultValue.length > 0;
}

export function validateOffsetRow(offset: number) {
  return offset !== null && offset !== undefined && offset >= 0 ;
}

export function validateOffsetColumn(offset: number){
  return offset !== null && offset !== undefined && offset >= 0;
}