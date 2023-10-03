/**
 * Define a function to give information about a specific document
 * And give it a document as his Props and an Object as his Type
 */
const InfoDoc = ({document} : {document : object}) => {
    
  return (
    <article className="">
          <div className="flex justify-center mb-10 w-40 h-[50px] shadow-md">
              <span className="py-3 text-bold text-[24px]">1234AB 11</span> 
          </div>
          <section className="flex flex-col gap-8">
              <div className="flex gap-4">
                 
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Assurance</span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Vignette</span>
                </div>
            </div> 
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Carte Rose</span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Permit de Conduire</span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Controle Technique</span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-[50px] bg-[#00FF10FF]"></div>
                <div className="flex justify-center w-[534px] h-[40px] rounded-[12px] shadow-md">
                <span className="text-[20px] py-1">Vitre Teinté</span>
                </div>
            </div> 
          </section>
    </article>
  )
}

export default InfoDoc
