import { useEffect, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddressBindingsService } from "../services";

const key = "addressbindings";

const useAddressBindings = () => {
  
  const queryClient = useQueryClient();

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isAdded, setIsAdded ] = useState<boolean>(false);
  const [ addressBindings, setAddressBindings ] = useState<any>();

  const { isLoading: isQuerying, data, } = useQuery<any>(key, () => AddressBindingsService.getAll());

  const { isLoading: isAdding, mutate: addAddressBindingMutate } = useMutation(
    (addressBinding) => AddressBindingsService.add(addressBinding), {
      onSettled: () => {
        setIsAdded(true);
      }
    }
  );

  const { isLoading: isSaving, mutate: updateAddressBindingMutate } = useMutation(
    (addressBinding) => AddressBindingsService.update(addressBinding.id, addressBinding), {
    onMutate: async (addressBinding: any) => {
      await queryClient.cancelQueries(key);
      const previousData = queryClient.getQueryData<any>(key);

      if (previousData) {
        queryClient.setQueryData<any[]>(key, [...previousData, { ...addressBinding }]);
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


  useEffect(() => {
    setIsLoading(isAdding || isQuerying || isSaving);
  }, [isAdding, isQuerying, isSaving] );

  useEffect(() => {
    setAddressBindings(data);
  }, [data]);

  const addAddressBinding = (payload: any) => {
    addAddressBindingMutate(payload);
  }

  const updateAddressBinding = (id: number, payload: any) => {
    updateAddressBindingMutate(payload);
  }

  return { isLoading, isAdded, addAddressBinding, addressBindings, updateAddressBinding }

}

export { useAddressBindings }