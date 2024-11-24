import Details from "./Details"
import Last from "./Last"

const Footer = () => {
    return (
        <div className="py-[48px] px-[24px]" id="about">
            <div className="flex flex-col gap-[24px] lg:p-[80px]">
                <div className="flex flex-col gap-[24px] lg:flex-row lg:justify-between">
                    <div>
                        <h1 className="font-Roboto font-[600] text-[18px] text-center lg:text-left">Subscribe to our newsletter</h1>
                        <p className="font-Roboto font-[400] text-[16px] text-center lg:text-lef mt-[16px] lg:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <div className="lg:flex lg:gap-[16px]">
                            <input type="text" placeholder="Enter your email" className="block border-[1px] p-[12px] rounded-[5px] border-black font-Roboto font-[400] text-[16px] w-full lg:w-[265px]" />
                            <button className="border-[1px] py-[12px] rounded-[5px] border-black font-Roboto font-[400] text-[16px] w-full text-center mt-[16px] lg:mt-0 hover:bg-[red] hover:text-white hover:border-none">Subscribe</button>
                        </div>
                        <p className="font-Roboto font-[400] text-[12px] text-center lg:text-left mt-[16px]">By subscribing you agree to with our <span className="underline">Privacy Policy</span></p>
                    </div>
                </div>
            </div>
            <Details />
            <Last />
        </div>
    )
}

export default Footer