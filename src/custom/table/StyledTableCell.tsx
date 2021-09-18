import { withStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

// The `withStyles()` higher-order component is injecting a `classes`
export const StyledTableCellHeader = withStyles({
  root: {
    fontWeight: 700,
  },
})(TableCell);


