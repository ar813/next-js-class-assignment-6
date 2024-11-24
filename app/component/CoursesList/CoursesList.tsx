"use client"

import { useState } from "react"
import Card from "./Card"

const CoursesList = () => {

  const [toggle, setToggle] = useState(false)
  const toggleChange = () => {
    setToggle(!toggle)
  }

  return (
    <div className="mt-10 p-5" id="coursesList">
      <h1 className="font-Roboto font-bold text-[32px] text-center mb-[24px] ">Explore Courses By Category</h1>
      <p className="font-Roboto font-[400] text-[18px] text-center">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

      <div className="mt-[40px] grid min-[425px]:gap-[24px] gap-[20px] md:grid-cols-2 min-[1200px]:grid-cols-3">

        <Card heading="Design & Development" icon="pen-tool-2" headingSize="md:text-[18px]" />
        <Card heading="Marketing" icon="volume-high" />
        <Card heading="Development" icon="group" />
        <Card heading="Communication" icon="microphone" className={` ${toggle ? "block" : "hidden"}`} />
        <Card heading="Digital Marketing" icon="link" className={` ${toggle ? "block" : "hidden"}`} />
        <Card heading="Self Development" icon="arrow-2" className={` ${toggle ? "block" : "hidden"}`} />
        <Card heading="Business" icon="briefcase" className={` ${toggle ? "block" : "max-[768px]:hidden"}`} />
        <Card heading="Finance" icon="finance" className={` ${toggle ? "block" : "max-[768px]:hidden"}`} />
        <Card heading="Consulting" icon="book" className={` ${toggle ? "block" : "max-[768px]:hidden"}`} />

      </div>

      <div className="flex items-center justify-center mt-[96px]">
        <button onClick={toggleChange} className="py-[12px] px-[24px] border-[1px] border-black rounded-[5px] font-Roboto text-[16px] font-[400px] hover:bg-black hover:text-white">  {toggle ? "View Less Courses" : "View All Courses"}</button>
      </div>

    </div>
  )
}

export default CoursesList