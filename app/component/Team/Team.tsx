"use client"


import Card from "./Card"
import { useState } from "react"


const Team = () => {
    const [show, setShow] = useState(false)
    const showBoxes = () => {
        setShow(!show)
    }
    return (
        <div className="py-[48px] px-[24px] md:py-[112px] md:px-[64px] lg:py-[100px] bg-[#F7F7F7]">
            <h1 className="font-Roboto font-bold text-[32px] text-center">Our team</h1>
            <p className="font-Roboto font-[400] text-[18px] text-center mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[96px] mt-[48px] sm:mt-[80px]">
                <Card picture="one" heading="James Nduku" subheading="Marketing Coordinator" />
                <Card picture="two" heading="Joseph Munyambu" subheading="Nursing Assistant" />
                <Card picture="three" heading="Joseph Ngumbau" subheading="Medical Assistant" />
                <Card picture="four" heading="Erick Kipkemboi" subheading="Web Designer" className={`${show ? "max-[640px]:block" : "max-[640px]:hidden"}`} />
                <Card picture="five" heading="Stephen Kerubo" subheading="President of Sales" className={`${show ? "max-[640px]:block" : "max-[640px]:hidden"}`} />
                <Card picture="six" heading="John Leboo" subheading="Dog Trainer" className={`${show ? "max-[640px]:block" : "max-[640px]:hidden"}`} />
            </div>
            <div className="flex items-center justify-center mt-[96px] sm:hidden">
                <button onClick={showBoxes} className="py-[12px] px-[24px] border-[1px] border-black rounded-[5px] font-Roboto text-[16px] font-[400px] hover:bg-black hover:text-white sm:mb-[60px]">  {show ? "View Less Courses" : "View All Courses"}</button>
            </div>
        </div>
    )
}

export default Team