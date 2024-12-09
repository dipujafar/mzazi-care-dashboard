import ResetPasswordRequestTable from "@/components/(adminDashboard)/resetPasswordRequest/ResetPasswordRequestTable";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-main-color font-medium mb-6">
        Password Reset Request
      </h1>

      {/* reset password request table */}
      <ResetPasswordRequestTable></ResetPasswordRequestTable>
    </div>
  );
};

export default ResetPasswordPage;
