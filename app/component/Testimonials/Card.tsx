import { LiaStarSolid } from "react-icons/lia";

import Image from "next/image"



type CardProps = {
    heading: string;
    subheading: string;
    className?: string;
    picture: string;
}

const Card = ({ heading, subheading, className, picture }: CardProps) => {
    return (
        <div className={className}>
            <div className="border-[1px] border-black p-[32px] flex flex-col gap-[32px]">
                <div className="flex gap-[4px]">
                    < LiaStarSolid className="text-[20px]" />
                    < LiaStarSolid className="text-[20px]" />
                    < LiaStarSolid className="text-[20px]" />
                    < LiaStarSolid className="text-[20px]" />
                    < LiaStarSolid className="text-[20px]" />
                </div>
                <p className="font-Roboto font-[400] text-[18px]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
                <div className="flex gap-[24px] items-center">
                    <Image src={`/images/team/${picture}.svg`} width={80} height={80} alt={"one"} className="hover:shadow-[0px_0px_10px_gray] rounded-[100%] size-[56px]"></Image>
                    <div>
                        <h1 className="font-Roboto font-[600] text-[16px]">{heading}</h1>
                        <p className="font-Roboto font-[400] text-[16px] min-[1000px]:text-[14px] min-[1050px]:text-[16px]">{subheading}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card