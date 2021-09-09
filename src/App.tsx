import { createStyles, CssBaseline, makeStyles, Theme, Toolbar } from '@material-ui/core';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Apple from './pages/Apple';
import Pineapple from './pages/Pineapple';
import Strawberry from './pages/Strawberry';
import Banana from './pages/Banana';
import Avocado from './pages/Avocado';
import Melon from './pages/Melon';
import Grapes from './pages/Grapes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: 'white',
      overflow: 'auto'
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <Sidebar/>
        <main className={classes.content}>
          <Toolbar/>
          <Switch>
            <Route exact path="/" component={Apple}/>
            <Route path="/pineapple" component={Pineapple}/>
            <Route path="/strawberry" component={Strawberry}/>
            <Route path="/banana" component={Banana}/>
            <Route path="/avocado" component={Avocado}/>
            <Route path="/melon" component={Melon}/>
            <Route path="/grapes" component={Grapes}/>
        </Switch>
          {/* <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
