import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { PatternBindingsService } from "../../services/patterns-services";

const key = "patternlookup";


const useLookup = () => {
  const queryClient = useQueryClient();

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ {name, country}, setDuplicateParam ] = useState<any>({name: "", country: 0});

  const { isLoading: isLookupLoading, data: patternLookup, } = useQuery<any>(`${key}-lookup`, () => PatternBindingsService.getLookup());

  const getDuplicate = (name: string, country: number) => {
    setDuplicateParam({name, country});
  }


  useEffect(() => {
    setIsLoading(isLookupLoading);
  }, [isLookupLoading]);

  return { isLoading, patternLookup, getDuplicate };
}

export default useLookup;