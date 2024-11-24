const Achivements = () => {

    const className = {
        heading: "font-bold text-[20px] font-Roboto md:text-[25px] lg:text-[30px] xl:text-[40px]",
        paragraph: "font-[400px] text-[16px] font-Roboto"
    }

    return (
        <div className="my-[48px] mx-[24px] sm:my-[80px]" id="achivements">
            <h1 className="font-Roboto font-bold text-[32px] lg:text-[40px] xl:text-[48px] text-center">Our Achivements</h1>
            <p className="font-Roboto font-[400] text-[18px] text-center mt-[24px] lg:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            <p className="font-Roboto font-[400] text-[18px] text-center mt-[24px] max-[1024px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="mt-[48px] grid grid-cols-2 sm:grid-cols-4 gap-[48px] text-center">
                <div>
                    <h1 className={className.heading}>+200</h1>
                    <p className={className.paragraph}>Courses</p>
                </div>
                <div>
                    <h1 className={className.heading}>50K</h1>
                    <p className={className.paragraph}>Mentors</p>
                </div>
                <div>
                    <h1 className={className.heading}>370k</h1>
                    <p className={className.paragraph}>Students</p>
                </div>
                <div>
                    <h1 className={className.heading}>100+</h1>
                    <p className={className.paragraph}>Recognition</p>
                </div>
            </div>
        </div>
    )
}

export default Achivements