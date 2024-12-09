import Image from "next/image";
import userIcon from "@/assets/icons/user-group.png";

const RequestStatistic = () => {
  return (
    <div className="h-32 flex flex-col lg:flex-row gap-y-2  font-roboto text-primary-white">
      <div className="lg:w-1/2 h-full lg:mr-4 bg-[#eee0ec] rounded-xl flex gap-x-6 px-12 items-center ">
        <Image src={userIcon} alt="user" width={60} height={40} />

        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl truncate">Total Accepted</p>
          <h4 className="xl:text-3xl text-xl font-bold">518</h4>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:ml-4 bg-[#eee0ec] rounded-xl flex gap-6  px-12 items-center  ">
        <Image src={userIcon} alt="user" width={60} height={40} />

        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl truncate">Total Rejected</p>
          <h4 className="xl:text-3xl text-xl font-bold">50</h4>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RequestStatistic;