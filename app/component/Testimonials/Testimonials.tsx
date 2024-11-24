"use client"
import Card from "./Card"
import { GoDotFill } from "react-icons/go";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { useState } from "react"

const Testimonials = () => {

    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState(
        <Card heading="James Nduku" subheading="Software Developer" picture="three" />
    );

    function handleShowRight() {
        if (counter === 0) {
            setCard(<Card heading="James Nduku" subheading="Software Developer" picture="three" />);
            setCounter(1);
        } else if (counter === 1) {
            setCard(<Card heading="Erick Kipkemboi" subheading="Scrum Master" picture="one" />);
            setCounter(2);
        } else {
            setCard(<Card heading="Stephen Kerubo" subheading="UI/UX Designer" picture="six" />);
            setCounter(0);
        }
    }

    function handleShowLeft() {
        if (counter === 0) {
            setCard(<Card heading="James Nduku" subheading="Software Developer" picture="three" />);
            setCounter(1);
        } else if (counter === 1) {
            setCard(<Card heading="Erick Kipkemboi" subheading="Scrum Master" picture="one" />);
            setCounter(2);
        } else {
            setCard(<Card heading="Stephen Kerubo" subheading="UI/UX Designer" picture="six" />);
            setCounter(0);
        }
    }


    return (
        <div className="py-[48px] px-[24px] min-[1000px]:px-[64px] min-[1000px]:py-[112px] bg-[#FFFFFF] min-[1000px]:bg-[#F7F7F7]" id="testimonials">
            <h1 className="font-Roboto font-bold text-[32px] max-[365px]:text-[25px] text-center min-[1000px]:hidden">What Our Student Say</h1>
            <h1 className="font-Roboto font-bold text-[32px] max-[365px]:text-[25px] text-left max-[1000px]:hidden min-[1000px]:text-[48px]">Customer testimonials</h1>
            <p className="font-Roboto font-[400] text-[18px] text-center mt-[16px] mb-[48px] min-[1000px]:text-left min-[1000px]:mt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="grid gap-[32px] min-[1000px]:grid-cols-3 min-[1000px]:hidden">{card}</div>
            <div className="grid gap-[32px] min-[1000px]:grid-cols-3 max-[1000px]:hidden">
                <Card heading="James Nduku" subheading="Software Developer" picture="three" />
                <Card heading="Erick Kipkemboi" subheading="Scrum Master" picture="one" />
                <Card heading="Stephen Kerubo" subheading="UI/UX Designer" picture="six" />
            </div>
            <div className="flex items-center justify-between mt-[48px]">
                <div className="flex gap-[5px]">
                    <GoDotFill className="text-[10px] p-[5] text-[#8D8D8D] hover:text-black" />
                    <GoDotFill className="text-[10px] p-[5] text-[#8D8D8D] hover:text-black" />
                    <GoDotFill className="text-[10px] p-[5] text-[#8D8D8D] hover:text-black" />
                    <GoDotFill className="text-[10px] p-[5] text-[#8D8D8D] hover:text-black" />
                    <GoDotFill className="text-[10px] p-[5] text-[#8D8D8D] hover:text-black" />
                </div>
                <div className="flex gap-[8px]">
                    <PiArrowCircleLeftThin onClick={handleShowLeft} className="text-[48px] hover:bg-[black] hover:text-[white] rounded-[30px]" />
                    <PiArrowCircleRightThin onClick={handleShowRight} className="text-[48px] hover:bg-[black] hover:text-[white] rounded-[30px]" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials