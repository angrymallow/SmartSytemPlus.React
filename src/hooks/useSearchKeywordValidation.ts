import { useState, useEffect} from "react"

export function useSearchKeywordValidation(isRequired: boolean, searchKeyword: string) {

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(isRequired ? searchKeyword.length > 0 : true);
  }, [isRequired, searchKeyword]);

  return isValid;
}