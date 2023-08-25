import car from "../assets/car.jpg"

const UserLogin = () => {
  return (
    <article className="flex">
      <section className="w-[50%]">
        <div className="border-2 border-[#7D6CE2FF] w-[80%] h-[350px] rounded-2xl mt-28 mx-10 text-center">
          <img src={ car} alt='car' className="w-[90%] h-[300px] ml-4"/>
        </div>
        <div className="w-96 h-16 z-10 absolute top-32 left-28 bg-white">
          <div className="w-4 h-4 rounded-[50px] bg-[#6ECFBDFF] absolute bottom-4 left-20"></div>
        </div>
        <div className="w-[34%] h-16 z-10 absolute bottom-24 left-20 bg-white">
          <div className="w-4 h-4 rounded-[50px] bg-[#6ECFBDFF] absolute top-4 right-20"></div>
        </div>
      </section>
      <section className="w-[50%]">
        <div>

        </div>
      </section>
    </article>
  )
}

export default UserLogin
