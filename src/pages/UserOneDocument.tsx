import InfoDoc from "../components/InfoDoc"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const UserOneDocument = () => {
  const router = useNavigate()
  
  const [query] = useSearchParams()
  const [docData, setDocData] = useState(null)
  
  useEffect(() => {
    const id = query.get('document')
    if (!id) return ()=> null
    axios.get(`https://carmanagementbackend-production.up.railway.app/document/findByPk/${id}`)
      .then(rep => {
        setDocData(rep.data.rep)
    
    })
  }, [query])
  const goHome = () => {
    router('/user-document')
  }
  return (
    <article className="flex justify-between py-8 px-24">
      <section className="flex flex-col justify-between">
        <div className="mb-6" onClick={goHome}><ArrowLeftOutlined/></div>
        <div className="flex flex-col gap-2">
          <img src={ docData?.photoVehicule} alt="Car" className="w-80 h-48 bg-cover"/>
          <span>Marque : {docData?.marque }</span>
        </div>
        <div className="flex flex-col gap-2">
          <img src={ docData?.photoProp } alt="Owner" className="w-80 h-48 bg-cover"/>
          <span>{ docData?.nomProp}</span>
        </div>
      </section> 
      <section>
        <InfoDoc />
      </section>
    </article>
  )
}

export default UserOneDocument
