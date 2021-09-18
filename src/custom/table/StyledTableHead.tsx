import { withStyles } from '@material-ui/core/styles';
import { TableHead } from '@material-ui/core';
import { colors } from '../../themes/variables';

// The `withStyles()` higher-order component is injecting a `classes`
export const StyledTableHead = withStyles({
  root: {
    backgroundColor: colors.black5,
  },
})(TableHead);