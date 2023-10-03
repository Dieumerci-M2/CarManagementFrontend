import Image from '../assets/Logo.png'
// Define NavBar compoment
const NavBar = () => {
  return (
    <div className='shadow-md h-8'>
      <div className='my-3 w-[20px]  h-[20px] ml-3'><img src={Image} alt="Logo" /></div>
    </div>
  )
}

export default NavBar
 