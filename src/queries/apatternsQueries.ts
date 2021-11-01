import { useQuery, useMutation, useQueryClient } from "react-query";
import { IPattern } from "../types/interfaces/IPattern";
import { addPatternAsync, getCountriesWitPatternAsync, getPatternByCountryAsync, getPatternsAsync } from "../staticdata/patterns";

const usePatterns = () => useQuery("patterns", async () => {
  const result = await getPatternsAsync();
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

const usePatternsByCountry = (countryId: number) => useQuery("patternsByCountry", async () => {
  const result = await getPatternByCountryAsync(countryId);
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

const useCountriesWithPattern = () => useQuery("countriesWithPattern", async () => {
  const result = await getCountriesWitPatternAsync();

  if (result.error) {
    throw new Error(result.errorMessage);
  } 
  return result.data;
});

const useAddPattern = () => {
  const queryClient = useQueryClient();
  return useMutation((pattern) => addPatternAsync(pattern), {
    onMutate: async (newPattern: IPattern) => {
      await queryClient.cancelQueries("patterns");
      const previousData = queryClient.getQueryData<IPattern[]>("patterns");

      if (previousData) {
        queryClient.setQueryData<IPattern[]>("patterns", [...previousData, { ...newPattern }]);
      }
      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<IPattern[]>("patterns", context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("patterns");
    },
  });
}

export default usePatterns;
export { usePatternsByCountry, useAddPattern, useCountriesWithPattern }