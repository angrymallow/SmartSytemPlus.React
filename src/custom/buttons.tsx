import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
export const StyledButton = withStyles({
  root: {
    letterSpacing: '0.5px',
  },
  label: {
    textTransform: 'none',
  },
})(Button);