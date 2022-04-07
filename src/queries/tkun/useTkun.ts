import { useQuery, useMutation } from "react-query";
import { TKun } from "../../hooks/tkun/useImportTkun";
import { TkunServices } from "../../services/tkun-services";


const key = "tkun"
const useTkun  = (option: {load: boolean} = {load: false}) => {

  const { isLoading, data: tkunData} = useQuery<TKun[]>(key, () => 
      TkunServices.getAll(), {
        enabled: option.load,
        cacheTime: 0,
      }
  )

  const { isLoading: isUploading, mutate: uploadMutate, isSuccess: isUploaded } = useMutation(
    (payload) => TkunServices.upload(payload), {
      onMutate: (payload: TKun[]) => {
        console.log("send payload", payload);
      },
    }
  );

  const upload = (payload: TKun[]) => {
    uploadMutate(payload);
  }

    return {
      isLoading,
      tkunData,
      isUploaded,
      isUploading,
      upload
    }
  
}

export default useTkun;