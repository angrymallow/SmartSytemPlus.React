import { useEffect, useState } from "react"
import { Header } from "../../../../../../../types/interfaces/Header";

type SelectSOHeadersProps = {
  headers: Header[]
}

function SelectSOHeaders(props: SelectSOHeadersProps) {
  const { headers } = props;

  const [soHeaders, setSOHeaders] = useState<Array<Header>>([]);

  useEffect(() => {
    console.log("this triggers");
    if (!!headers) {
      setSOHeaders(headers.filter((header) => header.canSetAsSO));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>SelectHeader</div>
  )
}

export default SelectSOHeaders