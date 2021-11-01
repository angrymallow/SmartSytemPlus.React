import React from "react";
import { useState } from "react";

const AppContext = React.createContext<any>(null);
const { Provider } = AppContext;


const AppProvider = (props: any) => {
  const [maxRow, setMaxRow] = useState<number>(0);
  return <Provider value={{ maxRow, setMaxRow }}>{props.children}</Provider>;
};

export { AppContext, AppProvider };
