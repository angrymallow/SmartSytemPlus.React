import { useState } from "react";
import * as XLSX from "xlsx";

export interface TKun {
  id: number,
  chassis: string,
  terminal: string,
  parkLoc: string,
  customer: string,
  agent: string,
  model: string,
  inner: string,
  innerRemarks: string,
  year: string,
  maker: string,
  engineType: string,
  hybrid: string,
  carClass: string,
  carType: string,
  purpose: string,
  bodyType: string,
  cc: string,
  fuel: string,
  netWeight: string,
  grossWeight: string,
  length: string,
  width: string,
  height: string,
}

const useImportTkun = () => {

  const [percentage, setPercentage] = useState<string>("0");
  const [tkunData, setTkunData] = useState<TKun[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [importing, setImporting] = useState<boolean>(false);

  const doImport = (file: any) => {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      setImporting(true);
      setSuccess(false);
      setFailed(false);
      setPercentage("0");
      
      reader.onload = e => {
        /* Parse data */
        if (e !== null) {
          const bstr = e.target?.result;
          const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { header: 1,  });
          const roWcount = data.length - 1;
          const tkun = data.filter((t, i) => i > 0).map((t: any, index: number) => {
            setPercentage(((index + 1)/roWcount).toFixed(2));
            const result: TKun = {
              id: 0,
              chassis: t[0]?.toString(),
              terminal: t[2]?.toString(),
              parkLoc: t[3]?.toString(),
              customer: t[4]?.toString(),
              agent: t[5]?.toString(),
              model: t[6]?.toString(),
              inner: t[7]?.toString(),
              innerRemarks: t[8]?.toString(),
              year: t[9],
              maker: t[11]?.toString(),
              engineType: t[12]?.toString(),
              hybrid: t[13]?.toString(),
              carClass: t[14]?.toString(),
              carType: t[15]?.toString(),
              purpose: t[16]?.toString(),
              bodyType: t[18]?.toString(),
              cc: t[20]?.toString(),
              fuel: t[22]?.toString(),
              netWeight: t[24]?.toString(),
              grossWeight: t[25]?.toString(),
              length: t[26]?.toString(),
              width: t[27]?.toString(),
              height: t[28]?.toString()
            }
            return result;
          })
          setTkunData(tkun);
          setSuccess(true);
          setFailed(false);
          setImporting(false);
        };
      }
      if (rABS)  {
        reader.readAsBinaryString(file)
      }else { 
        reader.readAsArrayBuffer(file );
      };
  } 

  return {
    percentage,
    tkunData,
    doImport,
    success,
    failed,
    importing,
  }

}


export { useImportTkun };