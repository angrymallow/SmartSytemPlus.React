export interface Header {
  headerId: number,
  name: string,
  fixValues?: string[],
  canBind?: boolean,
  noDefaultValue?: boolean, // Should only show Changing value options -> fixed value shold not be available to the users
  helperText?: string,
  occurence?: number,
  valueSource?: number, 
  canSetAsSO?: boolean,
}
