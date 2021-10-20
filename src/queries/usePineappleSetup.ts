import { useQuery } from "react-query";
import { getPineappleSetup } from './mockdata';

export default function usePineappleSetup() {
  return useQuery<any>('pineapplesetup', getPineappleSetup, {cacheTime: 0})
}