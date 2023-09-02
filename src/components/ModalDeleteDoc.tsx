import { WarningOutlined } from '@ant-design/icons';
import {Button} from 'antd'
import { DocContext } from '../Context/Context';
import { useContext } from 'react';

const ModalDeleteDoc = ({ visible }: { visible: boolean }) => {

    const { modalDelete, setModalDelete } = useContext(DocContext)

 
    if (!visible) return null
    
  return (
      <main className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  
        flex justify-center items-center shadow-md'
      >
        <section className="bg-white w-[40rem] h-96 rounded-lg p-20 gap-20 flex flex-col justify-center items-center">
           <div className='flex justify-center gap-6 mt-8'>
                <WarningOutlined className='text-red-400 text-6xl'/> 
                <span className='text-2xl text-center mt-4'>Are you sure to Delete this Doc?</span>  
            </div>
            <div className='flex flex-col justify-center gap-6'>
              <Button className='w-48 h-12 bg-[#FFC466FF] text-xl rounded-md'>Delete Document</Button>
              <Button className='w-48 h-12 bg-red-600 text-xl rounded-md' onClick={()=>setModalDelete(false)}>Cancel</Button>
            </div>   
        </section>  
    </main>
  )
}

export default ModalDeleteDoc
