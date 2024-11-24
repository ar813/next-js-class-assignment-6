import Image from "next/image"
import { IoIosStar } from "react-icons/io";

type CardProps = {
    image: string;
    subHeading: string;
    heading: string;
    className?: string;
}


const Card = ({ image, subHeading, heading, className }: CardProps) => {
    return (
        <div className={className}>
            <div className="w-full bg-[#F7F7F7] rounded-[5px] hover:shadow-[0px_0px_10px_gray] duration-200">
                <Image src={`/images/courses/${image}.svg`} width={100} height={100} alt={image} className="w-full rounded-[5px]"></Image>
                <div className="py-[24px] px-[16px]">
                    <div className="flex items-center justify-between">
                        <h3 className="font-Roboto font-[600] text-[14px]">{subHeading}</h3>
                        <div className="flex items-center gap-[4px]">
                            <IoIosStar className="text-[#D9D9D9] w-[24px] h-[24px]" />
                            <h3 className="font-Roboto font-[600] text-[14px]">5.0</h3>
                        </div>
                    </div>
                    <h1 className="mt-[8px] font-Roboto font-bold text-[24px] sm:text-[17px] min-[700px]:text-[20px] md:text-[22px] min-[800px]:text-[24px] lg:text-[20px] min-[1150px]:text-[24px]">{heading}</h1>
                    <p className="mt-[8px] font-Roboto font-[400] text-[16px] w-[326px] max-[320px]:w-[250px] sm:w-[220px] min-[700px]:w-[285px] md:w-[326px] lg:w-[270px] min-[1150px]:w-[326px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className="mt-[24px] flex items-center gap-[16px]">
                        <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black hover:bg-[black] hover:text-white">Enroll Now</button>
                        <h1 className="font-Roboto font-[500] text-[16px] px-[24px]">$400</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card