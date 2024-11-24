import Image from "next/image"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

type CardProps = {
    heading: string;
    subheading: string;
    className?: string;
    picture: string;
}

const Card = ({ heading, subheading, className, picture }: CardProps) => {
    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-[24px] justify-center items-center">
                <Image src={`/images/team/${picture}.svg`} width={80} height={80} alt={"one"} className="hover:shadow-[0px_0px_10px_gray]"></Image>
                <div>
                    <h1 className="font-Roboto font-[600] text-[20px] text-center">{heading}</h1>
                    <p className="font-Roboto font-[400] text-[18px] text-center">{subheading}</p>
                </div>
                <div className="flex gap-[14px]">
                    <FaLinkedin className="w-[18px] h-[18px]" />
                    <FaTwitter className="w-[18px] h-[18px]" />
                    <FaDribbble className="w-[18px] h-[18px]" />
                </div>
            </div>
        </div>
    )
}

export default Card