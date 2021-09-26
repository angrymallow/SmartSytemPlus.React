
import { createStyles, Theme, makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 240;
const backgroundColor = '#FBFAFA';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      listItemRoot: {
        padding: '5px 15px',
        borderRadius: '5px',
        fontWeight: 700,
        '&$selected, &$selected:hover': {
          backgroundColor: '#F3FAFB',
          color: theme.palette.primary.main,
        },
        '&:hover': {
          backgroundColor: '#F3FAFB',
        },
        '&$selected': {
          '& .MuiListItemIcon-root': {
            '& svg': {
              '& path': {
                stroke: theme.palette.primary.main,
                strokeOpacity: '1'
              }
            }

          },

        },
        '& .MuiListItemIcon-root': {
          minWidth: '36px',
          '& svg': {
              height: '18px',
              width: '18px', 
            }
          }
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        padding: '5px',
      },
      drawerPaper: {
        width: drawerWidth,
        borderWidth: '0px',
      },
      drawerContainer: {
        overflow: 'auto',
        background: backgroundColor,
        height: '100%',
        padding: '10px',
        paddingRight: '0',
        paddingLeft: '15px'
      },
      footer: {
        height: '70px',
        textAlign: 'left',
        padding: '10px 20px',
        background: backgroundColor,
      },
      selected: {  
        borderRight: '5px',
        borderRightColor: alpha(theme.palette.primary.main, 0.6),
        borderRightStyle: 'solid'
      },
  
    })
  }
);

export default useStyles;