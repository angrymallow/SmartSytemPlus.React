
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const backgroundColor = '#FBFAFA';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        padding: '5px',
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
        background: backgroundColor,
        height: '100%'
      },
      footer: {
        height: '70px',
        textAlign: 'left',
        padding: '10px',
        background: backgroundColor,
      },
      bold: {
        fontWeight: 700,
      },
      selectedIconColor: {
        '& path': {
          stroke: theme.palette.secondary.main, 
          strokeOpacity: '1'
        }
      }

    })
  }
);

export default useStyles;