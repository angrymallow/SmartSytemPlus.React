import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { TKun } from "../hooks/tkun/useImportTkun";
import useTkun from "../queries/tkun/useTkun";


type TetsudaiKunProps = {
  data: TKun[],
  toolbarHeaderText: string,
}


const TetsudaiKunList = (props: TetsudaiKunProps) => {
  const headers = ["Chassis", "Terminal", "Park Loc", "Customer", "Agent", "Model", "Inner", "Inner Remarks", "Year", "Maker", "Engine Type", "Hybrid", "Car Class", "Car Type", "Purpose", "Body Type", "CC", "Fuel", "Net Weight", "Gross Weight", "Length", "Width", "Height"]
  const { data, toolbarHeaderText } = props;

  return (
   <Box marginTop={3}>
      <Paper elevation={0}>
        <Toolbar disableGutters>
          <Typography variant="h5" color="primary">{toolbarHeaderText}</Typography>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header: string) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data: TKun) => {
                return (
                  <TableRow key={data.chassis}>
                    <TableCell>
                      <Typography>{data.chassis}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.terminal}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.parkLoc}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.customer}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.agent}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.model}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.inner}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.innerRemarks}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.year}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.maker}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.engineType}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.hybrid}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.carClass}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.carType}</Typography>
                    </TableCell>                   <TableCell>
                      <Typography>{data.purpose}</Typography>
                    </TableCell>                   <TableCell>
                      <Typography>{data.bodyType}</Typography>
                    </TableCell>                   
                    <TableCell>
                      <Typography>{data.cc}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.fuel}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.netWeight}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.grossWeight}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.length}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.width}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{data.height}</Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

const TetsudaiKun = () => {

  const { isLoading, tkunData } = useTkun({load: true});
   return (
    <Container>
      <Box marginTop={5}>
        <Typography variant="h4">Tetsudai Kun</Typography>
        <Box display="flex" alignItems="center">
          <Typography paragraph variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eius! Aliquam doloremque quia fuga deserunt quod aliquid! Enim perspiciatis corporis in dolore voluptates? Quae.
          </Typography>
        </Box>
      </Box>
      {
        isLoading ? (<span>Loading T-Kun list</span>) : !!tkunData ?  
        <TetsudaiKunList data={tkunData} toolbarHeaderText="T-Kun List"></TetsudaiKunList> : null
      }
    </Container>
  );
}

export default TetsudaiKun;
export { TetsudaiKunList }