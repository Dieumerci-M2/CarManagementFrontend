import { createContext, useState, useEffect } from "react"
import { UserLoginInfo } from "../@types/global"
import { ContextInfo } from "../@types/global"
import 'react-toastify/dist/ReactToastify.css';
/**
 * Define and export a Context to Manage states
 *  To create a Context we use createContext() method
    As we use TypeScript, we should give a type the method createContext() 
 */
export const DocContext = createContext<ContextInfo>({})
/**
 * Define a Provider to Initialize States on it
 * As we use TS we should give a type to the children object
 * That means all children provided by The provider will be on JSX format
 * Because the Context flows in one direction and have just one source of truth
 */
const ContextProvider = ({ children }: { children: JSX.Element })=> {
    const [user, setUser] = useState<UserLoginInfo>(null)
  const [modalDelete, setModalDelete] = useState(false)
   const [LogName, setLogName] = useState('')
  const [LogPassword, setLogPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
 // Define the Css that will be provided to all Toasts declared on the App
    const toastOptions : object = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  /**
   * Define use Effect Hook as a trigger to take user information
   * when the application is launched and the user tries to connect.
   * The user information would be store on local storage
   * */
    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("InfoUser") as string);
    setUser( userInfo );
    }, []);
  console.log(user)
  return (
    /**
     * Here we place all the elements we will need in the rest of the application
     */
    <DocContext.Provider value={{
      user, modalDelete, setModalDelete, toastOptions, LogName,
      setLogName, LogPassword, setLogPassword, ConfirmPassword, setConfirmPassword 
    }}>
       {children}   
    </DocContext.Provider>
  )
}

export default ContextProvider
