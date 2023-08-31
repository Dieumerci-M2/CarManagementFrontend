import InfoDoc from "../components/InfoDoc"
import car from "../assets/voiture.jpg"
import man from "../assets/c.jpg"

const UserOneDocument = () => {
  
  return (
    <article className="flex justify-between py-8 px-24">
      <section className="flex flex-col justify-between">
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
    </article>
  )
}

export default UserOneDocument
