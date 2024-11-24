"use client"

import Card from "./Card"
import { useState } from "react"

const Courses = () => {
    const [show, setShow] = useState(false)
    const showBoxes = () => {
        setShow(!show)
    }
    const className = {
        nav: "font-Roboto text-[16px] font-[400] hover:border-b-[1px] hover:border-b-black",
    }
    return (
        <div className="px-[24px] pt-[48px]" id="courses">
            <h1 className="font-Roboto font-bold text-[32px] text-center lg:text-[56px]">Courses</h1>
            <p className="font-Roboto font-[400] text-[18px] text-center mt-[16px]">Your Ultimate Guide to learning</p>
            <div className="flex justify-around items-center gap-3 mt-[48px] mb-[64px] min-[425px]:w-[400px] min-[425px]:mx-auto">
                <button className={className.nav}>Popular</button>
                <button className={className.nav}>Recommended</button>
                <button className={className.nav}>Best Price</button>
            </div>
            <div className="grid gap-[64px] min-[700px]:gap-[40px] sm:gap-[30px] sm:grid-cols-2 lg:grid-cols-3 sm:px-[30px] min-[700px]:px-[10px]">
                <Card image="one" subHeading="Design" heading="UX/UI Design 201" />
                <Card image="two" subHeading="Programmimg" heading="Introduction to Python"/>
                <Card image="three" subHeading="Business" heading="Data Analysis for Beginners" className={`${show ? "min-[640px]:block" : "min-[640px]:hidden"} ${show ? "lg:block" : "lg:block"} `} />
                <Card image="four" subHeading="Art" heading="Art Specialization" className={`${show ? "block" : "hidden"}`} />
                <Card image="five" subHeading="Law" heading="Rule of Law" className={`${show ? "block" : "hidden"}`} />
                <Card image="six" subHeading="Tech" heading="Introduction to webflow" className={`${show ? "block" : "hidden"}`} />
            </div>
            <div className="flex items-center justify-center mt-[96px]">
                <button onClick={showBoxes} className="py-[12px] px-[24px] border-[1px] border-black rounded-[5px] font-Roboto text-[16px] font-[400px] hover:bg-black hover:text-white mb-[48px] sm:mb-[60px]">  {show ? "View Less Courses" : "View All Courses"}</button>
            </div>
        </div>
    )
}

export default Courses