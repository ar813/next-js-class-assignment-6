import Image from "next/image"

const Hero = () => {
  return (
    <div className="sm:grid grid-cols-2 mt-[14px]">

      <div className="sm:ml-[30px] justify-center p-[50px] pt-[70px] pb-[60px] flex flex-col items-center gap-[30px] sm:gap-[20px] sm:mb-[10px]">

        <h1 className="font-Roboto font-bold text-[35px] min-[425px]:text-[40px] leading-[50px] w-[300px] min-[425px]:w-[380px] sm:text-[30px] md:text-[40px] md:w-[380px] sm:w-[300px]">Learn new skills online with ease</h1>

        <p className="font-Roboto font-[400] text-[15px] min-[425px]:text-[18px] text-justify w-[290px] min-[425px]:w-[380px] sm:text-[14px] md:text-[18px] md:w-[380px] sm:w-[300px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        <div className="flex gap-[8px] group mt-[10px] min-[425px]:w-[380px] sm:ml-[80px] md:ml-[0px]">
          <button className="w-[150px] min-[425px]:w-[178px] h-[48px] rounded-[5px] border border-black font-Roboto font-[400] text-[16px] text-center bg-black text-white group-hover:bg-white group-hover:text-black transition duration-300 sm:w-[145px] md:w-[178px]">
            Start learning now
          </button>
          <button className="w-[140px] min-[425px]:w-[164px] h-[48px] rounded-[5px] border border-black font-Roboto font-[400] text-[16px] text-center bg-white group-hover:bg-black group-hover:text-white transition duration-300 sm:w-[135px] md:w-[164px]">
            Explore Courses
          </button>
        </div>

      </div>

      <div className="flex justify-end sm:pl-10">
        <Image src="/images/girl.svg" width={100} height={100} alt="girl" className="w-[640px] sm:hidden"></Image>
        <Image src="/images/girlForDesktop.svg" width={100} height={100} alt="girl" className="lg:mt-[7px] w-[640px] max-[639px]:hidden "></Image>
      </div>


    </div>
  )
}

export default Hero
