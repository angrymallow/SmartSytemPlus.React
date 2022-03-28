export interface IPatternDto {
  id: number,
  patternName: string,
  country: string,
  ivsiForm: string,
  patternType: string,
  uploadInfo: {
    fullName: string,
    stamp: string
  }
}