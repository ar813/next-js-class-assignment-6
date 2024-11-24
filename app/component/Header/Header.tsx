"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header = () => {

    const [nav, setNav] = useState(false)
    const [icon, setIcon] = useState(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)
    function handleNavBar() {
        setNav(!nav)
        setIcon(nav ? <IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" /> : <RxCross2 className="w-[24px] h-[24px] md:size-[30px]" />)
    }


    return (
        <div className="h-[72px]">

            <header className="flex items-center justify-between p-6 shadow lg:bg-[#F7F7F7] border-b-[1px] border-b-black">

                <div className="flex items-center">
                    <Image src="/images/logo.svg" width={100} height={100} alt="logo" className="w-[32.58px] h-[30.38px]"></Image>
                    <h1 className="font-[700] text-[25.07px] ml-3 font-Inter">Ddsgnr</h1>
                </div>

                <div className="xl:w-[704px] w-[550px] bg-white h-[44px] flex items-center max-[1023px]:hidden">
                    <ul className="flex font-[400] font-Roboto">
                        <li className="ml-[10px] xl:ml-[20px] hover:border-b hover:border-b-black transition duration-200"><Link href={"/"}>Home</Link></li>
                        <li className="ml-[25px] xl:ml-[50px] hover:border-b hover:border-b-black transition duration-200"><Link href={"#courses"}>Courses</Link></li>
                        <li className="ml-[25px] xl:ml-[50px] hover:border-b hover:border-b-black transition duration-200"><Link href={"#coursesList"}>Services</Link></li>
                        <li className="ml-[25px] xl:ml-[50px] hover:border-b hover:border-b-black transition duration-200"><Link href={"#achivements"}>Achievement</Link></li>
                        <li className="ml-[25px] xl:ml-[50px] hover:border-b hover:border-b-black transition duration-200"><Link href={"#about"}>About US</Link></li>
                        <li className="ml-[25px] xl:ml-[50px] hover:border-b hover:border-b-black transition duration-200"><Link href={"#testimonials"}>Testimonial</Link></li>
                    </ul>
                </div>

                <div>
                    <button onClick={handleNavBar} className="lg:hidden">{icon}</button>
                    <div className="flex gap-[16px] max-[1023px]:hidden group">
                        <button className="w-[95px] h-[40px] rounded-[5px] border border-black text-center bg-white text-black group-hover:bg-black group-hover:text-white transition duration-300">
                            Login
                        </button>
                        <button className="w-[95px] h-[40px] rounded-[5px] border border-black text-center bg-black text-white group-hover:bg-white group-hover:text-black transition duration-300">
                            Sign Up
                        </button>
                    </div>


                </div>

            </header>

            <div className={`flex justify-end lg:hidden`}>
                <div className={`absolute bg-black w-[80%] h-screen p-4 pt-7 ${nav ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
                    <ul className="font-[400] font-Roboto text-white leading-10">
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"/"}>Home</Link></li>
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"#courses"}>Courses</Link></li>
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"#coursesList"}>Services</Link></li>
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"#achievement"}>Achievement</Link></li>
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"#about"}>About US</Link></li>
                        <li className="active:border-2 pl-5" onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}}><Link href={"#testimonials"}>Testimonial</Link></li>
                    </ul>
                    <div className="mt-[60px] flex flex-col gap-3">
                        <button onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}} className="w-full h-[40px] rounded-[5px] border border-white text-center bg-white font-Roboto font-[700] active:bg-[#10f2c5] active:border-black">Login</button>
                        <button onClick={() => {setNav(false); setIcon(<IoReorderThreeSharp className="w-[24px] h-[24px] md:size-[30px]" />)}} className="w-full h-[40px] rounded-[5px] border border-white text-center bg-white font-Roboto font-[700] active:bg-[#10f2c5] active:border-black">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header