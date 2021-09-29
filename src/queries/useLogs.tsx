import { useQuery } from "react-query";
import { getLogs } from './mockdata';

export default function useLogs() {
  return useQuery<any>('logs', getLogs, {cacheTime: 0})
}