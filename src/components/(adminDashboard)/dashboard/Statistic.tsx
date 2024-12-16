const Statistic = () => {
  return (
    <div className="flex justify-between gap-5 flex-wrap">
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4 bg-[#e9dce7] rounded-xl">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Total Earnings
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">
          $2400.88
        </p>
      </div>
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4 bg-[#e9dce7] rounded-xl">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Total Users
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">2562</p>
      </div>
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4 bg-[#e9dce7] rounded-xl">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Total Nurses
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">1036</p>
      </div>
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4 bg-[#e9dce7] rounded-xl">
        <h3 className="2xl:text-2xl xl:text-xl text-xl truncate">
          Total Ambulance Providers
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">1036</p>
      </div>
    </div>
  );
};

export default Statistic;
