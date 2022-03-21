
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";
import { FormsService } from "../services";

const key = "forms";

export default function useGetForms() {
  return useQuery<any>(key, FormsService.getForms);
}

const useUpdateForms = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (form) => FormsService.updateForms(form.id, {description: form.description, status: form.status}), {
    onMutate: async (newForm: any) => {
      await queryClient.cancelQueries(key);
      const previousData = queryClient.getQueryData<any>(key);

      if (previousData) {
        queryClient.setQueryData<any[]>(key, [...previousData, { ...newForm }]);
      }
      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<any>(key, context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(key);
    },
  });
}


const useForms = () => {
  const [ isQuerying, setIsQuerying ] = useState<boolean>(false);
  const [ isAdded, setIsAdded ] = useState<boolean>(false);
  
  const { isLoading: isAdding, mutate: addFormMutate } = useMutation(
    (form) => FormsService.addform(form), {
    onSettled: () => {
      setIsAdded(true);
    }
  });
  
  useEffect(() => {
    setIsQuerying(isAdding);
  }, [isAdding]);

  const addForm = (formData: any) => {
    addFormMutate(formData);
  }
  
  const downloadForm = (id: number) =>  {
    setIsQuerying(true);
    FormsService.getFile(id).then((respFile) => {
      FormsService.downloadForm(id).then((response) => {
        let url = window.URL.createObjectURL(response.data);
        let a = document.createElement('a');
        a.href = url;
        a.download = respFile.data.filename;
        a.click();
        setIsQuerying(true);
      })
    })
  }

  return { isQuerying, addForm, downloadForm, isAdded }


}
// Add one custom hooks for forms where we can add edit delete 

export { useUpdateForms, useForms, }