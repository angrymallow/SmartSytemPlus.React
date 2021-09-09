import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: 'white',
      paddingLeft: '0px',
      color: theme.palette.text.primary,
    },
    grow: {
      flexGrow: 1,
    },
    noPadding: {
      paddingLeft: '0px',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: theme.palette.text.disabled,
      marginLeft: 0
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.disabled,
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      color: theme.palette.text.primary,
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
    userInfo: {
      padding: theme.spacing(0, 2),
      marginLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    menuIcon: {
      marginLeft: theme.spacing(3),
    }
    
  }),
);

export default useStyles;