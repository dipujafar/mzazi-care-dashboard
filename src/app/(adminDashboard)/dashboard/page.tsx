import EaringOverviewChart from "@/components/(adminDashboard)/dashboard/EarningOverviewChart";
import LatestUser from "@/components/(adminDashboard)/dashboard/LatestUser";
import Statistic from "@/components/(adminDashboard)/dashboard/Statistic";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-10 space-y-5 ">
      <Statistic></Statistic>
      <EaringOverviewChart></EaringOverviewChart>
      <LatestUser></LatestUser>
    </div>
  );
};

export default DashboardPage;
