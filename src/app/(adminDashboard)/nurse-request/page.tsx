import NurseRequestData from "@/components/(adminDashboard)/nurse-request/NurseRequestData";
import NurseRequestStatistic from "@/components/(adminDashboard)/nurse-request/NurseRequestStatistic";
import React from "react";

const NurseRequestPage = () => {
  return (
    <div className="space-y-10">
      <NurseRequestStatistic></NurseRequestStatistic>
      <NurseRequestData></NurseRequestData>
    </div>
  );
};

export default NurseRequestPage;
