import InfoDoc from "../components/InfoDoc"
import car from "../assets/voiture.jpg"
import man from "../assets/c.jpg"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import AdminBouton from "../components/AdminBouton"
import ModalDeleteDoc from "../components/ModalDeleteDoc"
import { DocContext } from "../Context/Context"
import { useContext } from "react"
/**
 * Define a page to get one Document for Super User
 */
const SuperUserOneDoc = () => {
   /**
   * Asign a constante to the Hook useNavigate In fact to nagivate trougth other pages
   * or components
   *  */ 
  const router = useNavigate()
  // 
  const goHome = () => {
    router('/user-document')
  }
  const {modalDelete} = useContext(DocContext)

  return (
     <article className="flex justify-between py-8 px-16">
      <section className="flex flex-col justify-between">
        <div className="mb-6" onClick={goHome}><ArrowLeftOutlined/></div>
        <div className="flex flex-col gap-2">
          <img src={ car} alt="Car" className="w-80 h-48"/>
          <span>Marque : BMW</span>
        </div>
        <div className="flex flex-col gap-2">
          <img src={ man } alt="Owner" className="w-80 h-48"/>
          <span>Md</span>
        </div>
      </section> 
      <section>
        <InfoDoc />
      </section>
      <section>
        <AdminBouton />
      </section>
    <ModalDeleteDoc visible={modalDelete} />
    </article>
  )
}

export default SuperUserOneDoc
