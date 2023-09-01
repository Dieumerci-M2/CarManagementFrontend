import { createContext, useState, useEffect } from "react"
import { UserLoginInfo } from "../@types/global"

export const DocContext = createContext({})

const ContextProvider = ({ children }: { children: JSX.Element })=> {
    const [user, setUser] = useState<UserLoginInfo>()
    const [modalDelete, setModalDelete] = useState<boolean>(false)
    
    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("InfoUser") as string);
    setUser( userInfo );
    }, []);
  return (
    <DocContext.Provider value={{ user, modalDelete, setModalDelete }}>
       {children}   
    </DocContext.Provider>
  )
}

export default ContextProvider
