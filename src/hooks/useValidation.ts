import { useState, useEffect } from "react"

export function useValidation(isRequired: boolean, predicate: Function) {

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(isRequired ? predicate() : true);
  }, [isRequired, predicate]);

  return isValid;
}