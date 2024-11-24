import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Social = () => {
  return (
    <div className="flex justify-between items-center bg-[#F7F7F7] px-[64px] h-[54px] border-b-[1px] border-b-black mb-[17px] max-[1024px]:hidden">
        <div>
            <p className="font-Roboto font-[400] text-[14px]">Phone Number: 956 742 455 678 Email:info@ddsgnr.com</p>
        </div>
        <div className="flex justify-between text-[18px] gap-[12px]">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        </div>
    </div>
  )
}

export default Social