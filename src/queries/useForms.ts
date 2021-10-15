
import { useQuery } from "react-query";
import { getIVSIForms } from './mockdata';

export default function useIVSIForms() {
  return useQuery<any>('forms', getIVSIForms )
}