
import '../App.css'
import { Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const UpdateDoc = () => {
     /**
   * Asign a constante to the Hook useNavigate In fact to nagivate trougth other pages
   * or components
   *  */ 
    const router = useNavigate()

    const Homepage = () => {
        router('/super-user-document')
    }
  return (
      <article className='flex my-20 mx-28'>
          <ArrowLeftOutlined className='absolute top-20 left-5' onClick={Homepage}/>
          <section className='flex flex-col justify-center w-[50%] gap-12'>
              <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Assurance</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer '
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
               <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Vignette</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer '
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
               <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Carte Rose</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer '
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
               <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Permit de Conduire</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer '
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
               <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Controle Technique</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer '
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
          </section>
          <section className='flex flex-col w-[50%] justify-center gap-8'>
              <div className='flex justify-end items-end gap-8'>
                <span>Nom Prop</span>
                <Input className='w-96 h-8'/>
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Photo Prop</span>
                <Input className='w-96 h-8' />
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Marque</span>
                <Input className='w-96 h-8' />
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Plaque</span>
                <Input className='w-96 h-8' />
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>ID Véhicule</span>
                <Input className='w-96 h-8'/>
              </div>
            <Button className='w-48 h-12 bg-[#FFC466FF] text-xl rounded-md ml-16'>Update Document</Button>
          </section>
    </article>
  )
}

export default UpdateDoc
