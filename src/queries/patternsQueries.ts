import { useQuery, useMutation, useQueryClient } from "react-query";
import { IPattern } from "../types/interfaces/IPattern";
import { GetPatternsByCountryResponse } from "../types/interfaces/api/GetPatternsByCountryResponse";
import { GetPatternsResponse } from "../types/interfaces/api/GetPatternsResponse";
import { addPatternAsync, getAllPatternsAsync, getPatternByCountryAsync } from "../staticdata/patterns";

const usePatterns = () => useQuery<GetPatternsResponse>("patterns", getAllPatternsAsync);
const usePatternsByCountry = (countryId: number) => useQuery<GetPatternsByCountryResponse>("patternsByCountry", () => getPatternByCountryAsync(countryId));
const useAddPattern = () => {

  const queryClient = useQueryClient();
  
  return useMutation((pattern) => addPatternAsync(pattern), {
    onMutate: async (newPattern: IPattern) => {
      await queryClient.cancelQueries("patterns");
      const previousData = queryClient.getQueryData<GetPatternsResponse>("patterns");

      if (previousData) {
        queryClient.setQueryData<GetPatternsResponse>("patterns", { ...previousData, data: [...previousData.data, { ...newPattern }] });
      }
      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<GetPatternsResponse>("patterns", context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("patterns");
    },
  });
}

export default usePatterns;
export { usePatternsByCountry, useAddPattern }