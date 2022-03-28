import { ValueTypeEnum } from "../types/enums/ValueTypeEnum";
import { APIResponse } from "../types/interfaces/api/APIResponse";
import { ICountry } from "../types/interfaces/ICountry";
import { IPattern } from "../types/interfaces/IPattern";
import { IPatternByCountry } from "../types/interfaces/IPatternByCountry";
import { IPatternDto } from "../types/interfaces/IPatternDto";
import countries from "./countries";
import forms from "./forms";
import patternTypes from "./patternTypes";

const patterns: IPattern[] = [
  {
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
  {
    id: 2,
    name: "AA JAPAN KB",
    typeId: 2,
    formId: 3,
    countryId: 2,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 3,
    name: "MAIN",
    typeId: 1,
    formId: 1,
    countryId: 1,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 4,
    name: "ACTION MOTORS YK",
    typeId: 1,
    formId: 3,
    countryId: 2,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 5,
    name: "AKEBONO SM",
    typeId: 4,
    formId: 4,
    countryId: 1,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 6,
    name: "CAPTAIN TRADERS - MAIN",
    typeId: 4,
    formId: 1,
    countryId: 3,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 7,
    name: "RELATION-MAIN",
    typeId: 2,
    formId: 1,
    countryId: 4,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  {
    id: 8,
    name: "FRT - AUTO WORLD",
    typeId: 4,
    formId: 1,
    countryId: 6,
    addedBy: 1,
    addedDate: "10/21/2021",
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
  }
]

const getPatternByCountryAsync = async (countryId: number): Promise<APIResponse<IPatternByCountry[]>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const result = patterns
        .filter((pattern) => pattern.countryId === countryId)
        .map((pattern) => {
          return {
            id: pattern.id,
            name: pattern.name,
            countryId: pattern.countryId,
          } as IPatternByCountry;
        });
      resolve({ success: true, data: result });
    }, 200)
  );
}

const getAllPatternsAsync = async (): Promise<APIResponse<IPattern[]>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ success: true, data: patterns })
    }, 2000)
  )
}

const getCountriesWitPatternAsync = async (): Promise<APIResponse<ICountry[]>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const allCountries = countries;

      const countryIds = [...Array.from(new Set(patterns.map((pattern) => pattern.countryId)))];
      const result = countryIds.map((countryId) => ({
        id: countryId,
        name: allCountries.find((country) => country.id === countryId)?.name
      } as ICountry))

      resolve({ success: true, data: result })
    }, 1000)
  )
}

const getPatternsAsync = async (): Promise<APIResponse<IPatternDto[]>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const result = patterns.map((pattern) => ({
        id: pattern.id,
        patternName: pattern.name,
        country: countries.find((country) => country.id === pattern.countryId)?.name,
        ivsiForm: forms.find((form) => form.id === pattern.formId)?.name,
        patternType: patternTypes.find((patternType) => patternType.id === pattern.typeId)?.name,
        uploadInfo: {
          fullName: "Bryan Alvarez",
          stamp: "10/22/2021"
        }
      } as IPatternDto));

      resolve({ success: true, data: result });
    }, 1500)
  )
}

const getDuplicatePatternsAsync = async (name: string, country: number): Promise<APIResponse<{ isDuplicate: boolean, duplicatePatterId: number }>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const duplicate = patterns.find(
        (pattern) => pattern.name.toLowerCase() === name.toLowerCase() && pattern.countryId === country
      );

      resolve({ success: true, data: { isDuplicate: !!duplicate, duplicatePatterId: !!duplicate ? duplicate.id : 0 } })
    }, 1500)
  )
}

const addPatternAsync = async (pattern: IPattern): Promise<APIResponse<number>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const newId = patterns.sort((a, b) => b.id - a.id)[0]?.id + 1;
      patterns.push({
        ...pattern,
        id: newId,
      });
      resolve({ success: true, data: newId })
    }, 1000)
  )
}


export default patterns;

export { getPatternByCountryAsync, getAllPatternsAsync, addPatternAsync, getCountriesWitPatternAsync, getPatternsAsync, getDuplicatePatternsAsync }