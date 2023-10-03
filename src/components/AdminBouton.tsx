import { Button } from 'antd';
import { PlusOutlined, ReloadOutlined, DeleteOutlined } from '@ant-design/icons'
import { DocContext } from '../Context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Define an Admin Button component whitch contain three buttons
const AdminBouton = () => {
  // Use setModalDelete state comes from DocContext
  const { setModalDelete } = useContext(DocContext)
  /**
   * Asign a constante to the Hook useNavigate In fact to nagivate trougth other pages
   * or components
   *  */ 
  const router = useNavigate()
  return (
    <article className='ml-6 my-24 flex flex-col gap-20'>
          <div>
        <Button icon={<PlusOutlined />} className='h-12 text-xl' onClick={()=>router('/super-user-document/add-document')}>
          Add Document
        </Button>
          </div>
          <div>
        <Button icon={<ReloadOutlined />} className='h-12 text-xl' onClick={()=>router('/super-user-document/update-document')}>
          Update Document
        </Button>
          </div>
          <div onClick={()=>setModalDelete(true)}>
            <Button icon={<DeleteOutlined />} className='h-12 text-xl'>Delete Document</Button>  
          </div>
    </article>
  )
}

export default AdminBouton
