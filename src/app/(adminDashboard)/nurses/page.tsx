import NursesData from "@/components/(adminDashboard)/nurses/NursesData";
import NursesStatistic from "@/components/(adminDashboard)/nurses/NursesStatistic";
import React from "react";

const NursesPage = () => {
  return (
    <div className="space-y-10">
      <NursesStatistic></NursesStatistic>
      <NursesData></NursesData>
    </div>
  );
};

export default NursesPage;
