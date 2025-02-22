import Image from "next/image";
import HomeHeader from "@/components/TheHomePage/HomeHeader";
import BackgroundImage1 from "@/assets/TheHomePage/image/bg1.png";
import SignupPageMain from "@/components/TheSignupPage/SignupPageMain";
export default function SignupPage() {
  return (
    <div className="w-full h-[calc(100vh-140px)] realtive">
      <div className="absolute left-0 top-0 -z-10">
        <Image src={BackgroundImage1} alt="" />
      </div>
      <HomeHeader />
      <SignupPageMain />
    </div>
  );
}
