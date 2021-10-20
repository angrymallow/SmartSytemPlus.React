import { useState, useEffect} from "react"

export function useSheetNameValidation(isRequired: boolean, sheetName: string) {

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(isRequired ? sheetName.length > 0 : true);
  }, [isRequired, sheetName]);

  return isValid;
}