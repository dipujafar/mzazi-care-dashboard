import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo.png";
import ForgetPassForm from "@/components/(auth)/forgetPassword/ForgetPassForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-main-color ">
      <div className="flex justify-center items-center w-[441px]   mx-auto border-2  md:px-12 px-11 py-10 rounded-[40px] bg-[#FFF9FA] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div>
              <Image src={logo} alt="logImage"></Image>
              <h1 className=" mt-3 font-extrabold text-main-color">YUMQUICK</h1>
            </div>
            <div className="text-center space-y-4 mb-4">
              <div className="text-2xl  font-bold  text-center ">
                <h2 className="flex justify-center items-center">
                  <Link href={"/login"}>
                    <IoIosArrowRoundBack size={40} />
                  </Link>
                  Forget Password
                </h2>
              </div>
              <p>Please enter your email address to reset your password.</p>
            </div>
          </div>
          <ForgetPassForm></ForgetPassForm>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
