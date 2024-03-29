import { UserDocumentInfo } from '../@types/global'
import { Link} from 'react-router-dom'

const Document = ({ data }: { data: UserDocumentInfo }) => {
  return (
    <article className='flex flex-col shadow-md w-60 rounded-b-md'>
      <Link to={`/user-document/one-document?document=${data.id}`}>
        <div className='cursor-pointer'>
        <img src={data?.photoVehicule } className='h-44' />
        </div>
      </Link>
        <div className='flex justify-center items-center mt-4'>
        <span>{ data?.plaque}</span>
        </div>
        <div className='flex gap-4 pl-4 mt-1 mb-4'>
          <div className='flex flex-col'>
          <span>PC</span>
          {
            data?.permiDeConduire
            ? <div className="w-5 h-5 rounded-[50px] bg-[#00FF10FF]"></div>
            : <div className="w-5 h-5 rounded-[50px] bg-[#F9623EFF]"></div>
          } 
          </div>
        <span className='mr-6 mt-1'>{ data.nomProp}</span>
        </div>
    </article>
  )
}

export default Document
