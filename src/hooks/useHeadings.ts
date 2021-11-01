import { useEffect, useState } from "react";

export function useHeadings(dataObj: any){
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const keys = dataObj.keys.map((key: string) => key);
    setHeadings(keys)
  }, [dataObj]);

  return headings;

}