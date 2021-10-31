import { useQuery } from "react-query";
import { getPatternLookupAsync } from "../../staticdata/lookup";

const useLookup = () => useQuery("pattern-lookup", async () => {
  const result = await getPatternLookupAsync();
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

export default useLookup;