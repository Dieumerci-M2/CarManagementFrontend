import { createContext, useState, useEffect } from "react"
import { UserLoginInfo } from "../@types/global"
import { ContextInfo } from "../@types/global"

export const DocContext = createContext<ContextInfo>({})

const ContextProvider = ({ children }: { children: JSX.Element })=> {
    const [user, setUser] = useState<UserLoginInfo>(null)
    const [modalDelete, setModalDelete] = useState(false)

    const toastOptions : object = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
    
    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("InfoUser") as string);
    setUser( userInfo );
    }, []);
  return (
    <DocContext.Provider value={{ user, modalDelete, setModalDelete , toastOptions}}>
       {children}   
    </DocContext.Provider>
  )
}

export default ContextProvider
