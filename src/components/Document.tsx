import car from '../assets/voiture.jpg'
const Document = () => {
  return (
    <article className='flex flex-col mx-20 shadow-md w-60 rounded-b-md'>
        <div className='cursor-pointer'>
        <img src={car } className='h-44'/>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <span>1234AB 11</span>
        </div>
        <div className='flex gap-4 pl-4 mt-1 mb-4'>
          <div className='flex flex-col'>
            <span>PC</span>
            <div className="w-5 h-5 rounded-[50px] bg-[#FFA616FF]"></div>
          </div>
          <span className='mr-6 mt-1'>MUHINDO DIEUMERCI</span>
        </div>
    </article>
  )
}

export default Document
