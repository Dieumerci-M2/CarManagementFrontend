import { createContext, useState, useEffect } from "react"
import { UserLoginInfo } from "../@types/global"
import { ContextInfo } from "../@types/global"
import 'react-toastify/dist/ReactToastify.css';

export const DocContext = createContext<ContextInfo>({})

const ContextProvider = ({ children }: { children: JSX.Element })=> {
    const [user, setUser] = useState<UserLoginInfo>(null)
  const [modalDelete, setModalDelete] = useState(false)
   const [LogName, setLogName] = useState(null)
  const [LogPassword, setLogPassword] = useState(null)

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
    <DocContext.Provider value={{
      user, modalDelete, setModalDelete, toastOptions, LogName,
      setLogName, LogPassword, setLogPassword
    }}>
       {children}   
    </DocContext.Provider>
  )
}

export default ContextProvider
