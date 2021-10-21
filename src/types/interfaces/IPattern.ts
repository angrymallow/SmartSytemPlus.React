import { IPatternBinding } from "./IPatternBinding";

export interface IPattern {
  id: number,
  name: string,
  typeId: number,
  formId: number,
  countryId: number,
  addedBy: number,
  addedDate: string,
  updatedBy: number,
  updatedDate: string,
  bindings: IPatternBinding[],
}