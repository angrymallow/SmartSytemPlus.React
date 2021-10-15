import React from "react";
import { useEffect, useState } from "react";

export interface User {
  fullName: string,
  type: string,
  avatar: string,
}

const initialState: User = {
  fullName: 'John Doe',
  type: 'Administrator',
  avatar: 'apple'
}

const UserContext = React.createContext<any>(null);
const { Provider } = UserContext;

const UserProvider = (props: any) => {
  const [user, setUser] = useState<User>(initialState);

  useEffect(() => {
   setTimeout(() => {
      setUser({
        fullName: 'Bryan',
        type: 'Administrator',
        avatar: 'avocado',
      });
    }, 500);
  }, [])

  return <Provider value={{user, setUser}}>{props.children}</Provider>
}

export { UserProvider, UserContext };

