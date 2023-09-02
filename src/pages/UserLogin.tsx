import car from "../assets/car.jpg"
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserLoginInfo } from "../@types/global";
import axios from "axios";
import { DocContext } from "../Context/Context";

const UserLogin = () => {
  // Navigator
  const router = useNavigate();

  // Initialize UseState
  const [LogName, setLogName] = useState<string>(null)
  const [LogPassword, setLogPassword] = useState<string>(null)

  const {toastOptions} = useContext(DocContext)

  const connectHandler = async () => {

    if (LogName.length === 0 && LogPassword.length) {
      toast.error('complete all the field', toastOptions)
      return
    }

    try {
      const config : object = {
        headers: {
            'Content-Type' : 'application/json'
        },
        mode : 'cors'
      }

      const { data }: { data: UserLoginInfo[] } = await axios.post("https://carmanagementbackend-production.up.railway.app/userLogin/account/login",
        { userName: LogName, password: LogPassword }, config)
      
      toast.success('Login successful', toastOptions)
      
       localStorage.setItem( 'InfoUser', JSON.stringify(data))
      router('/user-document')
      
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
        <ToastContainer/>
        <div className="flex flex-col gap-8 w-[500px] h-[500px] rounded-lg shadow-md my-10 mr-8 px-10 pt-4">
          <div className="flex flex-col">
            <span className="font-Inria font-serif text-2xl">Let's Get Started 🚀</span>
            <span className="text-[#9095A0FF]">Sing in your account</span>
          </div>
          <div className="flex flex-col gap-4">
            <Input size="large" placeholder="User Name" prefix={<UserOutlined />} onChange={(e)=>setLogName(e.target.value)}/>
            <div className="flex flex-col gap-2">
              <Space direction="vertical" className="w-full">
              <Input.Password placeholder="password" size="large" iconRender={(visible) =>
                (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={(e)=> setLogPassword(e.target.value)} />
              </Space>
              <span className="text-[#7D6CE2FF]">Forgot password?</span>
            </div>
            <Button size="large" className="w-full bg-[#7D6CE2FF] text-white"
            onClick={connectHandler}>continuer
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center"> 
            <span className="text-[#babcbe]">By continuing you agree to our</span>
            <div className="flex gap-2">
              <span>Terms & Conditions</span>
              <span className="text-[#babcbe]">and</span><span>Privacy Policy</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span>Already have'nt an account ?</span>
            <span className="text-[#7D6CE2FF] 
            cursor-pointer" onClick={() => { router('/user-signUp') }}
            >Sign Up
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Button type="text" className="text-[#7D6CE2FF]"
              onClick={()=>{router('/super-user-login')}}
            >ADMIN
            </Button>
          </div>
        </div>
      </section>
    </article>
  )
}

export default UserLogin
