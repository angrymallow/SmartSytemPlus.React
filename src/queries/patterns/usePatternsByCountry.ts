import { useQuery } from "react-query";
import { getPatternByCountryAsync } from "../../staticdata/patterns";

const usePatternsByCountry = (countryId: number) => useQuery("patternsByCountry", async () => {
  const result = await getPatternByCountryAsync(countryId);
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

export { usePatternsByCountry }