
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";

export default function useIVSIForms() {
  return useQuery<any>('forms', () => fetch(
    "https://localhost:7004/smartsystem/api/ivsiform").then((res) => res.json()),
    {cacheTime: 0}
  );
}

const useUpdateForms = () => {
  const queryClient = useQueryClient();
  return useMutation((form) => {
     return fetch('https://localhost:7004/smartsystem/api/ivsiform/' + form.id, 
        { 
          method: 'PUT', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ description: form.description, status: form.status })
        })
        .then(response => response.json())
  }, {
    onMutate: async (newForm: any) => {
      await queryClient.cancelQueries("forms");
      const previousData = queryClient.getQueryData<any>("forms");

      if (previousData) {
        queryClient.setQueryData<any[]>("forms", [...previousData, { ...newForm }]);
      }
      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<any>("forms", context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("forms");
    },
  });
}

export { useUpdateForms }