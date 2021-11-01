import { useQuery } from "react-query";
import { getCountriesWitPatternAsync } from "../../staticdata/patterns";

const useCountriesWithPattern = () => useQuery("countriesWithPattern", async () => {
  const result = await getCountriesWitPatternAsync();

  if (result.error) {
    throw new Error(result.errorMessage);
  } 
  return result.data;
});

export default useCountriesWithPattern