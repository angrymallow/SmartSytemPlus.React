import { ValueTypeEnum } from "../types/enums/ValueTypeEnum";
import { APIResponse } from "../types/interfaces/api/APIResponse";
import { IPineappleUniform } from "../types/interfaces/IPineappleUniform";

const pineappleUniforms: IPineappleUniform[] = [
  {
    id: 0,
    pattern: {
      id: 1,
      name: "A.D.N GROUP KW",
      typeId: 4,
      formId: 2,
      countryId: 1,
      addedBy: 1,
      addedDate: "08/20/2021",
      updatedBy: 0,
      updatedDate: "",
      bindings: [
        {
          headerId: 1,
          option: {
            isSO: true,
            type: ValueTypeEnum.changing,
            prefix: "",
            trim: 0,
            dynamicValue: {
              searchKeyword: "date",
              findSheet: "",
              offsetColumn: 0,
              offsetRow: 0,
            }
          }
        },
        {
          headerId: 2,
          option: {
            isSO: true,
            type: ValueTypeEnum.changing,
            prefix: "Chassis No.",
            trim: 0,
            dynamicValue: {
              searchKeyword: "chassis",
              findSheet: "sheet1",
              offsetColumn: 0,
              offsetRow: 0,
            }
          }
        },
      ]
    },
    data: {},
    documentId: "test",
  }
]

const getPineappleUniformByDocumentId = (documentId: string): Promise<APIResponse<IPineappleUniform>> => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve({success: true, data: pineappleUniforms[0]})
    },2000)
  )
}

export default pineappleUniforms;

export { getPineappleUniformByDocumentId }