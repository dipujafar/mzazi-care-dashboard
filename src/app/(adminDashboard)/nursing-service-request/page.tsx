import NursesRequestData from "@/components/(adminDashboard)/nursing-service-request/NursesRequestData";
import RequestStatistic from "@/components/(adminDashboard)/nursing-service-request/RequestStatistic";
import React from "react";

const NursingServiceRequestPage = () => {
  return (
    <div className="space-y-10">
      <RequestStatistic></RequestStatistic>
      <NursesRequestData></NursesRequestData>
    </div>
  );
};

export default NursingServiceRequestPage;
