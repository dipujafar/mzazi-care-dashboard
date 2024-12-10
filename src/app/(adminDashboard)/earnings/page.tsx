import EarningData from "@/components/(adminDashboard)/earning/EarningData";
import EarningStatistic from "@/components/(adminDashboard)/earning/EarningStatistic";
import React from "react";

const EarningPage = () => {
  return (
    <div className="space-y-10">
      <EarningStatistic></EarningStatistic>
      <EarningData></EarningData>
    </div>
  );
};

export default EarningPage;
