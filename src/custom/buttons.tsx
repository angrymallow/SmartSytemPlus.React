import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
export const StyledButton = withStyles({
  root: {
    letterSpacing: '0.5px',
    padding: '6px 30px',
  },
  label: {
    textTransform: 'none',
    fontWeight: 500
  },
})(Button);