import { useQuery } from "react-query";
import { getCountries } from './mockdata';

export default function useCountries() {
  return useQuery<any>('countries', getCountries)
}