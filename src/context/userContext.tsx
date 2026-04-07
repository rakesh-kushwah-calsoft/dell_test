import { createContext } from "react";
import { useUserApi } from "../hooks/useUserApi";
import type { IContext } from "../types/user.type";

export const UserContext = createContext<IContext | null>(null)

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const { users, setUsers} = useUserApi()

  return(
    <UserContext.Provider value={{users, setUsers}}>
      {children}
    </UserContext.Provider>
  )

}