import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import "./TopHeader.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
export const TopHeader = () => {
  return (
    <>
      <div className="top-header container-md mx-auto px-6 py-2 flex justify-between items-center">
        <div className="icons cursor-pointer flex justify-between items-center">
          <Link
            href={
              "https://www.linkedin.com/company/revdau-ts/mycompany/?viewAsMember=true"
            }
            target="_blank"
            passHref
          >
            <BsLinkedin
              size={20}
              className="text-linkedin"
              attributeName="linkedin"
            />
          </Link>
        </div>
        <div className="details flex items-center justify-center">
          <a
            href="mailto:HR@revdau.com"
            className="mr-2 ml-1 flex items-center "
          >
            <AiOutlineMail />
            hr@revdau.com
          </a>
          <a href="tel:987654321" className="flex items-center">
            <AiOutlinePhone />
            <span className="text-slate-700">+91-987654321</span>
          </a>
        </div>
      </div>
    </>
  );
};
