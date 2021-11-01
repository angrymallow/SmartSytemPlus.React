import { useQuery } from "react-query";
import { getPatternsAsync } from "../../staticdata/patterns";

const usePatterns = () => useQuery("patterns", async () => {
  const result = await getPatternsAsync();
  if (result.error) {
    throw new Error(result.errorMessage);
  }
  return result.data;
});

export default usePatterns;