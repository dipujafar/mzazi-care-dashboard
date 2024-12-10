import Image from "next/image";
import planIcon from "@/assets/icons/planIcon.png";
import { Check } from "lucide-react";
import { ReactNode } from "react";

type TPlan = {
  name: string;
  price: number;
  duration: string;
  features: string[];
};

const MembershipCard = ({
  children,
  data,
}: {
  children?: ReactNode;
  data: TPlan;
}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#eee0ec]  gap-y-6 py-8 rounded-xl">
      <div className="flex items-center gap-x-2">
        <Image src={planIcon} alt="planIcon"></Image>
        <h4 className="xl:text-3xl text-2xl font-semibold text-main-color">
          {data?.name}
        </h4>
      </div>
      {/* package pricing and duration */}
      <div className="bg-main-color w-full flex flex-col items-center justify-center rounded-tl-full rounded-br-full py-4 text-white">
        <h5 className="text-2xl font-medium">
          ${data?.price} for {data?.duration}
        </h5>
        <p className="text-base">Renews after {data?.duration}</p>
      </div>

      {/* features of the package */}
      <div className="flex flex-col gap-y-3">
        {data?.features?.map((feature) => (
          <div className="flex   gap-x-2">
            <div className="bg-main-color p-1 rounded-full h-fit">
              <Check size={14} color="#fff" />
            </div>
            <p className="max-w-md">{feature}</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default MembershipCard;
