import { InputLabel, withStyles } from "@material-ui/core";

const StyledInputLabel = withStyles((theme) => ({
  root: {
    fontSize: '14px',
    fontWeight: 700,
  },
  shrink: {
    transform: 'scale(1)'
  }
}))(InputLabel);

export default StyledInputLabel