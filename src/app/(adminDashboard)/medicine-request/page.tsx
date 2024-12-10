import MedicineReqStatistic from "@/components/(adminDashboard)/medicine-request/MedicineReqStatistic";
import MedicineRequestData from "@/components/(adminDashboard)/medicine-request/MedicineRequestData";
import React from "react";

const MedicineRequest = () => {
  return (
    <div className="space-y-10">
      <MedicineReqStatistic></MedicineReqStatistic>
      <MedicineRequestData></MedicineRequestData>
    </div>
  );
};

export default MedicineRequest;
