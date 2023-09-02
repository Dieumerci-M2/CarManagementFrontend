import car from "../assets/car.jpg"
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserLoginInfo } from "../@types/global";
import { ToastContainer, toast } from 'react-toastify';
import { DocContext } from "../Context/Context";
import { ContextInfo } from "../@types/global";
import axios from "axios";

const UserSingUp = () => {
  const router = useNavigate();
  const { toastOptions } = useContext(DocContext)
  const [signName, setSignnName] = useState<string>(null)
  const [singPassword, setSingPassword] = useState<string>(null)
  const [confirmPassword, setConfirmPassword] = useState<string>(null)

  // Regex to validate userName and password
  let regexEmail = /^([a-zA-Z._\-0-9]{3,50})@([a-zA-Z0-9]{3,20})\.([a-zA-Z]{2,5})$/;
  let regexPassword = /^([ #-ù]{8,20})$/i;

  const submitHandler = () => {
    if (signName.length === 0 || singPassword.length === 0 || confirmPassword.length === 0) {
      toast.warning(`Please complete  all the field`, toastOptions)
      return
    }
    if ( singPassword !== confirmPassword ) {
      toast.warning('please enter the some password', toastOptions)
    }
    if ( !regexEmail.test( signName ) ) {
      toast.error(`Please enter a valid Email`, toastOptions)
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
        <div className="flex flex-col gap-6 w-[500px] h-[500px] rounded-lg shadow-md my-10 mr-8 px-10 pt-4">
          <div className="flex flex-col">
            <span className="font-Inria font-serif text-2xl">Let's Get Started 🚀</span>
            <span className="text-[#9095A0FF]">Sing Up your account</span>
          </div>
          <div className="flex flex-col gap-4">
            <Input size="large" placeholder="User Name" prefix={<UserOutlined />} />
              <Space direction="vertical" className="w-full">
              <Input.Password placeholder="password" size="large" iconRender={(visible) =>
                (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Space>
            <Space direction="vertical" className="w-full">
              <Input.Password placeholder="Confirm password" size="large" iconRender={(visible) =>
                (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
              </Space>
            <Button size="large" className="w-full bg-[#7D6CE2FF] text-white">continuer</Button>
          </div>
          <div className="flex flex-col justify-center items-center"> 
            <span className="text-[#babcbe]">By continuing you agree to our</span>
            <div className="flex gap-2">
              <span>Terms & Conditions</span>
              <span className="text-[#babcbe]">and</span><span>Privacy Policy</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span>Already have an account ?</span>
            <span className="text-[#7D6CE2FF] cursor-pointer" onClick={()=>{router('/user-login')}}>Login</span>
          </div>
          <div className="flex justify-center items-center">
            <Button type="text" className="text-[#7D6CE2FF]">ADMIN</Button>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </article>
  )
}

export default UserSingUp
