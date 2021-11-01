import { useQuery } from "react-query";
import { getPatternTypes } from './mockdata';

export default function usePattenTypes() {
  return useQuery<any>('typecodes', getPatternTypes)
}

