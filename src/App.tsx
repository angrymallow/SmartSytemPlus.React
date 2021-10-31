import { useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStyles, CssBaseline, makeStyles, Theme, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Apple from "./pages/Apple";
import Pineapple from "./pages/Pineapple";
import Strawberry from "./pages/Strawberry";
import Ivsi from "./pages/Ivsi";
import Bindings from "./pages/Bindings";
import { SearchContext } from "./context/SearchContext";
import { UserProvider } from "./context/UserProvider";
import Patterns from "./pages/Patterns";
import { ClosedImage } from "./assets/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      background: "white",
      overflow: "auto",
    },
  })
);

const ClosePage = () => {
  return (
    <div style={{ height: "80%", width: "100%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
      <p>This feature is not yet available</p>
      <ClosedImage style={{ height: 400, margin: "0 auto" }} />
    </div>
  );
};

const queryClient = new QueryClient();

function App() {
  const [searchPlaceholder, setSearchPlaceholder] = useState<string>("search");
  const [search, setSearch] = useState<string>("");
  const [isSearchHidden, setSearchIsHidden] = useState<boolean>(false);
  const classes = useStyles();
  const searchValue = useMemo(
    () => ({
      searchPlaceholder,
      setSearchPlaceholder,
      search,
      setSearch,
      isSearchHidden,
      setSearchIsHidden,
    }),
    [searchPlaceholder, setSearchPlaceholder, search, setSearch, isSearchHidden, setSearchIsHidden]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <UserProvider>
            <SearchContext.Provider value={searchValue}>
              <Header />
              <Sidebar />
              <main className={classes.content}>
                <Toolbar />
                <Switch>
                  <Route exact path="/" component={Apple} />
                  <Route path="/pineapple" component={Pineapple} />
                  <Route path="/strawberry" component={Strawberry} />
                  <Route path="/banana" component={ClosePage} />
                  <Route path="/avocado" component={ClosePage} />
                  <Route path="/melon" component={ClosePage} />
                  <Route path="/grapes" component={ClosePage} />
                  <Route path="/ivsi" component={Ivsi} />
                  <Route path="/bindings" component={Bindings} />
                  <Route path="/patterns" component={Patterns} />
                </Switch>
              </main>
            </SearchContext.Provider>
          </UserProvider>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
