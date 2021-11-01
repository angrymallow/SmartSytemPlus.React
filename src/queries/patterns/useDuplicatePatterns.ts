import { useQuery } from "react-query";
import { getDuplicatePatternsAsync } from "../../staticdata/patterns";

const useDuplicatePatterns = (name: string, country: number) => useQuery<any>(
  ["duplicate-patterns", { name, country }],
  async () => {
    const result =  await getDuplicatePatternsAsync(name, country);
    if (result.error) {
      throw new Error(result.errorMessage);
    }

    return result.data;
  },
  { cacheTime: 0, enabled: name.length > 0 && country > 0 }
);

export default useDuplicatePatterns;
