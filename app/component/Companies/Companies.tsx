import Image from "next/image"
const Companies = () => {
  return (
    <div className="md:flex items-center lg:bg-[#F7F7F7]">
      <h1 className="font-Roboto font-bold text-[18px] mx-[24px] min-[425px]:w-[327px] mt-[48px] mb-[20px] md:hidden">Trusted by the world&apos;s best companies &#91;social proof to build credibility&#93;</h1>
      <h1 className="font-Roboto font-bold lg:text-[20px] xl:text-[24px] lg:w-[360px] mx-[24px] min-[425px]:w-[327px] my-[48px] max-[767px]:hidden">Trusted by 2000+ companies worldwide.</h1>
      <div className="h-[65.34px] overflow-hidden flex items-center lg:w-[1000px] lg:ml-10">
          <div className="flex gap-[16px] pl-8" id="animation">
            <Image src={"/images/companies/companiesOne.svg"} width={100} height={100} alt="companiesOne" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
            <Image src={"/images/companies/companiesTwo.svg"} width={100} height={100} alt="companiesTwo" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
            <Image src={"/images/companies/companiesThree.svg"} width={100} height={100} alt="companiesThree" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
            <Image src={"/images/companies/companiesFour.svg"} width={100} height={100} alt="companiesFour" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
            <Image src={"/images/companies/companiesFive.svg"} width={100} height={100} alt="companiesFive" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
            <Image src={"/images/companies/companiesSix.svg"} width={100} height={100} alt="companiesSix" className="w-[107.15px] h-[33.34px] lg:w-[123.8px] lg:h-[38.52px]"></Image>
          </div>
      </div>
    </div>
  )
}

export default Companies