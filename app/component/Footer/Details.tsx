import Image from "next/image"
const Details = () => {
    const className = {
        heading: "font-Roboto font-[600] text-[16px] text-center md:text-left",
        paragraph: "font-Roboto font-[400] text-[14px] text-center md:text-left"
    }
    return (
        <div className="grid md:grid-cols-4 gap-[32px] md:py-[80px] py-[48px]">

            <div>
                <div className="flex items-center justify-center">
                    <Image src="/images/logo.svg" width={100} height={100} alt="logo" className="w-[32.58px] h-[30.38px]"></Image>
                    <h1 className="font-[700] text-[25.07px] ml-3 font-Inter">Ddsgnr</h1>
                </div>
            </div>

            <div className="grid gap-[16px] ">
                <h1 className={className.heading}>Courses</h1>
                <p className={className.paragraph}>Business</p>
                <p className={className.paragraph}>Development</p>
                <p className={className.paragraph}>Technology</p>
                <p className={className.paragraph}>Design</p>
                <p className={className.paragraph}>Programming</p>
            </div>

            <div className="grid gap-[16px] ">
                <h1 className={className.heading}>Resources</h1>
                <p className={className.paragraph}>Career</p>
                <p className={className.paragraph}>Resume</p>
                <p className={className.paragraph}>Learning</p>
                <p className={className.paragraph}>Interview Preparation</p>
                <p className={className.paragraph}>Jobs</p>
            </div>

            <div className="grid gap-[16px] ">
                <h1 className={className.heading}>About Us</h1>
                <p className={className.paragraph}>Contact</p>
                <p className={className.paragraph}>Help/Support</p>
                <p className={className.paragraph}>FAQ</p>
                <p className={className.paragraph}>Terms and Conditions</p>
                <p className={className.paragraph}>Partners</p>
            </div>

        </div>

    )
}

export default Details