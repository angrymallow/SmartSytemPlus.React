import { withStyles } from '@material-ui/core/styles';
import { StyledButton } from '.';

// The `withStyles()` higher-order component is injecting a `classes`
export const SizedButton = withStyles({
  root: {
    width: '150px',
  },
})(StyledButton);

