import { useContext, useRef } from 'react';
import '../App.css'
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { DocContext } from '../Context/Context';
import axios from 'axios';
/**
 * Define AddDoc Page for Add document on the DB
 * We use useRef intead od useState to the reason of rerendering
 * of pages at alltimes when we change state of the element
 */
const AddDoc = () => {
    const nameProp = useRef<HTMLInputElement>(null)
    const pictureProp = useRef<HTMLInputElement>(null)
    const pictureVehicule = useRef<HTMLInputElement>(null)
    const marqueVehicule = useRef<HTMLInputElement>(null)
    const plaqueVehicule = useRef<HTMLInputElement>(null)
    const assuranceRef = useRef<HTMLSelectElement>(null)
    const vignetteRef = useRef<HTMLSelectElement>(null)
    const carteRoseRef  = useRef<HTMLSelectElement>(null)
  const permideConduireRef = useRef<HTMLSelectElement>(null)
  const controleTechniqueRef = useRef<HTMLSelectElement>(null)
  const vitreTinteRef  = useRef<HTMLSelectElement>(null)
// Take the toastOption element provided by DocContext
  const {toastOptions} = useContext(DocContext)
  /**
 * Define AddDoc function for Add document on the DB
 */
  const addDoc = async () => {
    
    const nomProp = nameProp.current.value
    const photoProp = pictureProp.current.value
    const photoVehicule = pictureVehicule.current.value
    const marque = marqueVehicule.current.value
    const plaque = plaqueVehicule.current.value
    const assurance = assuranceRef.current.value
    const vignette = vignetteRef.current.value
    const carteRose = carteRoseRef.current.value
    const permiDeConduire = permideConduireRef.current.value 
    const controleTechnique = controleTechniqueRef.current.value 
    const vitreTinte = vitreTinteRef.current.value

    if (nomProp == null  || photoProp == null || marque == null || plaque == null || photoVehicule == null) {
      toast.warning(`Please complete all the field`, toastOptions)
      return
    }
    try {
    // Configurate the headers and the mode of sending Data when we'l use axios for Fetching data
     const config : object = {
        headers: {
            'Content-Type' : 'application/json'
        },
        mode : 'cors'
      }
    /**
     * The POST axios's method insert elements cames to the client and go to the sever
     *  */ 
     await axios.post('https://carmanagementbackend-production.up.railway.appdocument/create/new',
       {
         plaque, nomProp, photoProp, photoVehicule, assurance, vignette, carteRose, permiDeConduire,
         controleTechnique, vitreTinte
       }, config)
      toast.success(`Document added successfuly`, toastOptions)
    } catch (error) {
      console.error()
      toast.error(`There is a problem on process`, toastOptions)
   }
  }

  return (
    <article className='flex my-20 mx-28'>
          <section className='flex flex-col justify-center w-[50%] gap-12'>
              <div className='flex gap-4'>
                  <div className='flex justify-center items-center p-4 w-80 shadow-md h-8 rounded-md'>
                      <span className='pb-2'>Assurance</span>
                  </div> 
                  <select name="boolean" className='bg-white px-4 rounded-[4px] 
                  shadow-md cursor-pointer ' ref={assuranceRef}
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
                  shadow-md cursor-pointer ' ref={vignetteRef}
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
                  shadow-md cursor-pointer ' ref={carteRoseRef}
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
                  shadow-md cursor-pointer ' ref={permideConduireRef}
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
                  shadow-md cursor-pointer ' ref={controleTechniqueRef}
                  >
                      <option value="True">True</option>
                      <option value="False">False</option>
                  </select>
              </div> 
          </section>
          <section className='flex flex-col w-[50%] justify-center gap-8'>
              <div className='flex justify-end items-end gap-8'>
                <span>Nom Prop</span>
                <input placeholder='nom complet du proprietaire' type='name' className='w-96 h-8' ref={nameProp}/>
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Photo Prop</span>
                <input placeholder='lien de la photo' className='w-96 h-8' ref={pictureProp}/>
        </div>
        <div className='flex justify-end items-end gap-8'>
                <span>Photo Véhicule</span>
          <input type='link' className='w-96 h-8' placeholder='lien de la photo du véhicule'
            ref={ pictureVehicule}
          />
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Marque</span>
                <input type='text' className='w-96 h-8' placeholder='ex : BMW' ref={marqueVehicule}/>
              </div>
              <div className='flex justify-end items-end gap-8'>
                <span>Plaque</span>
                <input type='text' className='w-96 h-8' placeholder='xxxxxx xx' ref={plaqueVehicule}/>
              </div>
        <Button className='w-44 h-12 bg-[#FFC466FF] text-xl rounded-md ml-16'
          onClick={addDoc}
        >
          Add Document
        </Button>
      </section>
      <ToastContainer/>
    </article>
  )
}

export default AddDoc
