import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { PatternBindingsService } from "../../services/patterns-services";
import { getPatternsAsync } from "../../staticdata/patterns";
import IPatternLookup from "../../types/interfaces/IPatternLookup";

const key = 'patterns';

const usePatternss = () => useQuery("patterns", async () => {
  const result = await getPatternsAsync();
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

const usePatterns = () => {

  const [ loadHeaders, setLoadHeaders ] = useState<boolean>();

  const { isLoading: isLookupLoading, data: lookup, } = useQuery<IPatternLookup>(`${key}-lookup`, () => 
                PatternBindingsService.getLookup(), { 
                  refetchOnWindowFocus: false
                });

  const { isLoading: isDuplicateChecking, mutate: checkDuplicateMutate, data: isDuplicate } = useMutation(
    (payload) => PatternBindingsService.getDuplicates(payload.name,  payload.country), {
      onMutate: (payload: any) => {
        console.log("send payload", payload);
      },
    }
  );

  const { isLoading: isHeadersFetching, data: headers, } = useQuery<any>([`${key}-headers`, loadHeaders], () => 
                PatternBindingsService.getHeaders(), { 
                  refetchOnWindowFocus: false,
                  enabled: loadHeaders === true,
                });


  const checkDuplicate = (name: string, country: number) => {
    checkDuplicateMutate({name, country});
  }

  const getHeaders = () => {
    console.log("getHeaders is triggered")
    setLoadHeaders(true);
  }

  useEffect(() => {
    if (isHeadersFetching === false && !!headers) {
      console.log("header is fetched setting to false", headers);
      setLoadHeaders(false);
    }
  }, [isHeadersFetching, headers])

  return {  
    lookup: {
      loading: isLookupLoading,
      data: lookup,
    },
    duplicate: {
      loading: isDuplicateChecking,
      data: isDuplicate,
      checkDuplicate: checkDuplicate
    },
    headersLookup: {
      loading: isHeadersFetching,
      data: headers,
      getHeaders,
    }
  }
}

export default usePatterns;
export { usePatternss } 