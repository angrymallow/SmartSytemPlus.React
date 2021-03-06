import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { updateElementAccess } from "typescript";
import { PatternBindingsService } from "../../services/patterns-services";
import { getPatternsAsync } from "../../staticdata/patterns";
import { IPatternDto, IPatternPostData } from "../../types/interfaces";
import { IPatternDataDto } from "../../types/interfaces/IPatternDataDto";
import IPatternLookup from "../../types/interfaces/IPatternLookup";
import { PatternDetails } from "../../types/interfaces/PatternDetails";

const key = 'patterns';

const usePatternss = () => useQuery("patterns", async () => {
  const result = await getPatternsAsync();
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

const usePatterns = (option: {loadList: boolean} = {loadList: false}) => {

  const [ loadHeaders, setLoadHeaders ] = useState<boolean>();
  
  const { isLoading, data: patterns, } = useQuery<IPatternDto[]>(key, () => 
                PatternBindingsService.getAll(), { 
                  enabled: option.loadList,
                  cacheTime: 0,
                });

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

  const { isLoading: isAdding, mutate: addMutate, isSuccess: isAdded } = useMutation(
    (payload) => PatternBindingsService.add(payload), {
      onMutate: (payload: IPatternPostData) => {
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

  const add = (pattern: IPatternPostData) => {
    addMutate(pattern);
  }

  useEffect(() => {
    if (isHeadersFetching === false && !!headers) {
      console.log("header is fetched setting to false", headers);
      setLoadHeaders(false);
    }
  }, [isHeadersFetching, headers])

  return {  
    isLoading,
    patterns,
    add,
    isAdding,
    isAdded,
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

const usePattern = (patternId: string) => {

  const { isLoading, data: pattern, } = useQuery<IPatternDataDto>("pattern", () => 
                PatternBindingsService.getById(patternId), {
                  cacheTime: 0,
                  enabled: !!patternId
                });

  const { isLoading: isUpdating, mutate: updateMutate, isSuccess: isUpdated } = useMutation(
    (payload) => PatternBindingsService.update(payload), {
      onMutate: (payload: IPatternPostData) => {
        console.log("send payload", payload);
      },
    }
  );

  const update = (pattern: IPatternPostData) => {
    updateMutate(pattern);
  }

  return {
    isLoading,
    pattern,
    isUpdating,
    isUpdated,
    update
  }
}

export default usePatterns;
export { usePatternss, usePattern } 