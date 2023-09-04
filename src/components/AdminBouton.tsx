import { Button } from 'antd';
import { PlusOutlined, ReloadOutlined, DeleteOutlined } from '@ant-design/icons'
import { DocContext } from '../Context/Context';
import { useContext } from 'react';

const AdminBouton = () => {
      const {setModalDelete} = useContext(DocContext)
  return (
    <article className='ml-6 my-24 flex flex-col gap-20'>
          <div>
              <Button icon={<PlusOutlined />} className='h-12 text-xl'>Add Document</Button>
          </div>
          <div>
            <Button icon={<ReloadOutlined />} className='h-12 text-xl'>Update Document</Button>
          </div>
          <div onClick={()=>setModalDelete(true)}>
            <Button icon={<DeleteOutlined />} className='h-12 text-xl'>Delete Document</Button>  
          </div>
    </article>
  )
}

export default AdminBouton
