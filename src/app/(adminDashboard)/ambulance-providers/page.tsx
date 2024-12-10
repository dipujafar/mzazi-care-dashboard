import AmbulanceProviderData from "@/components/(adminDashboard)/ambulance-provider/AmbulanceProviderData";
import AmbulanceProviderStatistic from "@/components/(adminDashboard)/ambulance-provider/AmbulanceProviderStatistic";
import React from "react";

const AmbulanceProvidersPage = () => {
  return (
    <div className="space-y-10">
      <AmbulanceProviderStatistic></AmbulanceProviderStatistic>
      <AmbulanceProviderData></AmbulanceProviderData>
    </div>
  );
};

export default AmbulanceProvidersPage;
