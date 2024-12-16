"use client";
import MembershipCard from "./MembershipCard";
import { Button } from "antd";
import { useState } from "react";
import EditMembership from "./EditMembership";
import Link from "next/link";

const membershipPackages = [
  {
    name: "Close Family",
    price: 219.99,
    duration: "1 month",
    features: [
      "24/7 access to medical professionals",
      "Monthly health check-ups for both members",
      "Medication delivery service",
    ],
  },
  {
    name: "Immediate Family",
    price: 319.99,
    duration: "1 month",
    features: [
      "24/7 access to medical professionals",
      "Monthly health check-ups for both members",
      "Medication delivery service",
    ],
  },
  {
    name: "Extended Family",
    price: 419.99,
    duration: "1 month",
    features: [
      "24/7 access to medical professionals",
      "Monthly health check-ups for both members",
      "Medication delivery service",
    ],
  },
];

const customerPackages = {
  name: "Custom Plan",
  price: 219.99,
  duration: "1 month",
  features: [
    "24/7 access to medical professionals",
    "Monthly health check-ups for both members",
    "Medication delivery service",
  ],
};
const MembershipContainer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* normal membership packages */}
      {membershipPackages.map((membershipPackage, index) => (
        <MembershipCard key={index} data={membershipPackage}>
          <div className="flex  gap-x-4 w-full xl:px-20 px-5">
            <div className="flex-1">
              <Button
                onClick={() => setShowModal(true)}
                style={{ width: "100%", padding: "20px 0px" }}
              >
                Edit
              </Button>
            </div>
            <div className="flex-1">
              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "#cd0335",
                  border: "1px solid #cd0335",
                  width: "100%",
                  padding: "20px 0px",
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </MembershipCard>
      ))}
      {/* custom membership packages */}
      <MembershipCard data={customerPackages}>
        <div className="flex  gap-x-4 w-full xl:px-20 px-5">
          <div className="flex-1">
            <Link href={"/custom-membership"}>
              <Button style={{ width: "100%", padding: "20px 0px" }}>
                Details
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <Button
              style={{
                backgroundColor: "transparent",
                color: "#cd0335",
                border: "1px solid #cd0335",
                width: "100%",
                padding: "20px 0px",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </MembershipCard>
      <EditMembership open={showModal} setOpen={setShowModal}></EditMembership>
    </div>
  );
};

export default MembershipContainer;
