import { TableCell, TableRow } from "@material-ui/core";
import { StyledTableCellHeader, StyledTableHead } from "../../custom/table";

interface IHeader {
  id: string,
  numeric?: boolean,
  label?: string,
  width?: number | 'auto',
  empty?: boolean,
}

const TableHeader = (props: any) => {
  
  const { headers }: { headers: IHeader[] } = props;

  return(
    <StyledTableHead>
      <TableRow>
        {
          headers.map((header) => {
            return header.empty ? <TableCell key={header.id}/> :
            <StyledTableCellHeader
              key={header.id}
              align={header.numeric ? 'right' : 'left'}
              style={{width: header.width === 'auto' ? 'auto' : `${header.width}%`}}
            >{header.label}</StyledTableCellHeader>
          })
        }
      </TableRow>
    </StyledTableHead>
  )
}


export { TableHeader };
export type { IHeader }