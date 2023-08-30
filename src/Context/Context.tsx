import { createContext, useState, useEffect } from "react"
import { UserLoginInfo } from "../@types/global"

export const DocContext = createContext<UserLoginInfo>(
  {} as UserLoginInfo)

const ContextProvider = ({ children }: { children: JSX.Element })=> {
    const [user, setUser] = useState<UserLoginInfo>()
    
    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("InfoUser") as string);
    setUser( userInfo );
    }, []);
  return (
    <DocContext.Provider value={{ user, setUser }}>
       {children}   
    </DocContext.Provider>
  )
}

export default ContextProvider
