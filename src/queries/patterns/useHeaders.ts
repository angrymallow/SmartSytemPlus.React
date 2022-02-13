import { useQuery } from "react-query";
import { getHeaders } from '../mockdata';

export default function useHeaders() {
  return useQuery<any>('headers', getHeaders, {cacheTime: 0})
}