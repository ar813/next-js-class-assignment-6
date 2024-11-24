import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Last = () => {
    const className = {
        paragraph: "underline font-Roboto font-[400] text-[14px]"
    }
    return (
        <div className="border-t-[1px] border-black md:flex md:justify-between">

            <div className="text-center mt-[32px] md:flex md:gap-[24px]">
                <p className="font-Roboto font-[400] text-[14px]">2023 Ddsgnr. All right reserved.</p>
                <div className="flex justify-around mt-[32px] md:mt-0 md:gap-[24px]">
                    <p className={className.paragraph}>Privacy Policy</p>
                    <p className={className.paragraph}>Terms of Service</p>
                    <p className={className.paragraph}>Cookies Settings</p>
                </div>
            </div>

            <div className="flex gap-[12px] text-[24px] mt-[32px] justify-center">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>

        </div>
    )
}

export default Last