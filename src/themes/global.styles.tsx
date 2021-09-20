import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: { 
    },
    rowHead: {
      fontWeight: 700,
    },
    link: {
      fontsize: '14px',
    },
    sizedButton: {
      width: '150px',
    },
    popper: {
      background: '#ffffff',
      boxshadow: theme.shadows[1],
      borderradius: '3px'
    }
  }),
);

