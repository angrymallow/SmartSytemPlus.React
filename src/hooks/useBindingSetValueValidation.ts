import { useEffect, useState } from "react";
import { PatternTypeEnum } from "../types/enums/PatternTypeEnum";
import { ValueTypeEnum } from "../types/enums/ValueTypeEnum";
import { SetValueValidation } from "../types/type/SetValueValidation";

const initialState: SetValueValidation = {
  columnOffsetRequired: false,
  defaultValueRequired: false,
  rowOffsetRequired: false,
  searchKeywordRequired: false,
  sheetNameRequired: false
}


export function useBindingSetValueValidation(patternType: PatternTypeEnum, valueType: ValueTypeEnum) {
  const [validation, setValidation] = useState<SetValueValidation>(initialState);

  useEffect(() => {
    if (valueType === ValueTypeEnum.fix) {
      setValidation({...initialState, defaultValueRequired: true });
    } else {
      if (patternType === PatternTypeEnum.PTC112){
        setValidation({...initialState, searchKeywordRequired: true});
      } else if (patternType === PatternTypeEnum.PTC121) {
        setValidation({...initialState, searchKeywordRequired: true, rowOffsetRequired: true, columnOffsetRequired: true});
      } else if (patternType === PatternTypeEnum.PTC211) {
        setValidation({...initialState, sheetNameRequired: true, searchKeywordRequired: true, rowOffsetRequired: true, columnOffsetRequired: true})
      } else if (patternType === PatternTypeEnum.PTC212) {
        setValidation({...initialState, sheetNameRequired: true, searchKeywordRequired: true, rowOffsetRequired: true})
      } else {
        setValidation(initialState);
      }
    }
  
  }, [patternType, valueType])

  return validation;
}