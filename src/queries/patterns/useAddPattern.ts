
import { useMutation, useQueryClient } from "react-query";
import { addPatternAsync } from "../../staticdata/patterns";
import { IPattern } from "../../types/interfaces/IPattern";
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

export default useAddPattern