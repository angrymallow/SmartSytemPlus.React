import { useQuery } from "react-query";
import { getPineappleUniformByDocumentId } from "../staticdata/pineappleUniforms";

const usePineappleUniformByDocumentId = (documentId: string) => useQuery(
 ["pineapplepatternbydocid", {documentId}], 
 async () => {
   const result = await getPineappleUniformByDocumentId(documentId);
   if ((await result).error) {
     throw new Error((await result).errorMessage);
   }

   return result.data;
 },
 { cacheTime: 0, enabled: documentId.length > 0}
)

export default usePineappleUniformByDocumentId;