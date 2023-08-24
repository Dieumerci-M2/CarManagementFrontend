import { Button } from 'antd';
import '../App.css'

const Presentation = () => {
 
  return (
      <article className="bg flex w-full bg-cover ">
          <section className='bg-black w-full opacity-90 flex-row justify-between'>
              <div className='text-center my-16'>
                  <span className='text-white text-4xl'>Présentation</span>
              </div>
            <div className='my-16 px-36'>
              <span className='text-white text-2xl leading-loose'>La population de Goma se lamente tous les jours des abus et des tracasseries menées par les agents de la circulation routière dans la route nationale n°2 ainsi que ses routes secondaires.
                      Il peut arriver qu’on soit arrêter pourtant on es en ordre avec tous les documents possibles d’éligibilité à conduire, faute des mises à jour instantanées où de perte de documents ou soit de vérification.
                  </span>
            </div>
              <div className='my-16 text-center'>
                  <Button className='bg-[#FFC466FF] w-32'>Continuer</Button>
              </div>   
          </section>
    </article>
  )
}

export default Presentation
