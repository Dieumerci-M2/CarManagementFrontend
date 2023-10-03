import car from "../assets/car.jpg"
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserLoginInfo } from "../@types/global";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { DocContext } from "../Context/Context";
import { useContext } from "react";
/**
 * Define the name of Super User Login Page
 * @returns 
 */
const SuperUserLogin = () => {
   /**
   * Asign a constante to the Hook useNavigate In fact to nagivate trougth other pages
   * or components
   *  */ 
  const router = useNavigate();
  // Call Context
  const {LogName, LogPassword, setLogName, setLogPassword, toastOptions} = useContext(DocContext)
  // Define a function Handler super user login
   const connectHandler = async () => {
  // Check if there is something on Logname and Logpassword
    if (LogName.length === 0 && LogPassword.length) {
      toast.error('complete all the field', toastOptions)
      return
    }
    /**
     * If there is something, Then Configurate the headers and the mode of sending Data 
     * when we'l use axios for Fetching data
     * The POST axios's method insert elements cames to the client and go to the sever
     */
    try {
      const config : object = {
        headers: {
            'Content-Type' : 'application/json'
        },
        mode : 'cors'
      }
      /**
       * Fetch Data and store them on data constant
       * Give the Type of income data as UserLoginInfo interface 
       * As you can see the method Post of axios take tree parameters
       * Url, sending Data and Data configuration.
       */
      const { data }: { data: UserLoginInfo[] } = await axios.post("https://carmanagementbackend-production.up.railway.app/superuserLogin/account/login",
        { userName: LogName, password: LogPassword }, config)
      
      toast.success('Login successful', toastOptions)
      /**
       * The local storage has tow method that is more used (getItem() and setItem)
       * setItem has two parameters inside on it
       * The name on storage and the sending Data
       * As the data comes in Json() format, we need to convert it to String format
       * in order to store it in LocalStorage.
       */
       localStorage.setItem( 'InfoUser', JSON.stringify(data))
      router('/super-user-document')
      
    } catch (error) {
      toast.error(`You haven't an Account please create an account`, toastOptions);
    }
  }
  return (
    <article className="flex">
      <section className="w-[50%]">
        <div className="border-2 border-[#7D6CE2FF] w-[80%] h-[350px] rounded-2xl mt-28 mx-24 text-center">
          <img src={ car} alt='car' className="w-[90%] h-[300px] ml-4"/>
        </div>
        <div className="w-96 h-16 z-10 absolute top-32 left-40 bg-white">
          <div className="w-4 h-4 rounded-[50px] bg-[#6ECFBDFF] absolute bottom-4 left-20"></div>
        </div>
        <div className="w-[34%] h-16 z-10 absolute bottom-24 left-32 bg-white">
          <div className="w-4 h-4 rounded-[50px] bg-[#6ECFBDFF] absolute top-4 right-40"></div>
        </div>
      </section>
      <section className="w-[50%] flex justify-center">
        <div className="flex flex-col gap-8 w-[500px] h-[500px] rounded-lg shadow-md my-10 mr-8 px-10 pt-4">
          <div className="flex flex-col">
            <span className="font-Inria font-serif text-2xl">Let's Get Started 🚀</span>
            <span className="text-[#9095A0FF]">Sing in your account</span>
          </div>
          <div className="flex flex-col gap-4">
            <Input size="large" placeholder="Super User Name" prefix={<UserOutlined />}
                    onChange={(e)=>setLogName(e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <Space direction="vertical" className="w-full">
              <Input.Password placeholder="password" size="large" iconRender={(visible) =>
                (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={(e)=> setLogPassword(e.target.value)}/>
              </Space>
              <span className="text-[#7D6CE2FF]">Forgot password?</span>
            </div>
            <Button size="large" className="w-full bg-[#7D6CE2FF] text-white"
                      onClick={connectHandler}
            >
              continuer
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center"> 
            <span className="text-[#babcbe]">By continuing you agree to our</span>
            <div className="flex gap-2">
              <span>Terms & Conditions</span>
              <span className="text-[#babcbe]">and</span><span>Privacy Policy</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button type="text" className="text-[#7D6CE2FF]"
              onClick={()=>{router('/user-login')}}
            >User
            </Button>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </article>
  )
}

export default SuperUserLogin
