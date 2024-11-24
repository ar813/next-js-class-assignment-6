import Image from "next/image";

interface CardProps {
    heading: string;
    icon: string;
    className?: string;
    headingSize?: string;
}

const Card: React.FC<CardProps> = ({ heading, icon, className, headingSize }) => {
    return (
        <div className={className}>
            <div className="min-[425px]:h-[132px] h-[100px] p-5 flex items-center bg-[#F7F7F7] rounded-[5px] hover:shadow-[0px_0px_10px_gray] duration-300">
                <div className="min-[425px]:w-[100px] min-[425px]:h-[100px] w-[60px] h-[60px] flex items-center justify-center bg-white">
                    <Image
                        src={`/images/couresesListIcons/${icon}.svg`}
                        width={100}
                        height={100}
                        alt={icon}
                        className="w-[32px] h-[32px]"
                    />
                </div>
                <div className="ml-[30px]">
                    <h1 className={`font-Roboto font-[600] min-[425px]:text-[20px] text-[14px] ${headingSize}`}>
                        {heading}
                    </h1>
                    <p className="font-Roboto font-[400] min-[425px]:text-[18px] text-[15px]">
                        50+ Courses Available
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
