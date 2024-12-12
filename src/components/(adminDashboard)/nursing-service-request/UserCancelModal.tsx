"use client";
import { Button, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import nurseImage from "@/assets/image/nurseImage.png";
import Image from "next/image";
import { Star } from "lucide-react";
import NurseDetailsModal from "../all-nurses/NurseDetailsModal";
import { useState } from "react";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const UserCancelModal = ({ open, setOpen }: TPropsType) => {
  const [openNurseDetails, setOpenNurseDetail] = useState(false);
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div
        className="w-12 h-12 bg-[#D7263D]  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine
          size={18}
          color="#fff"
          className="absolute top-1/3 left-1/3"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-x-6 gap-y-3">
        {/* _____________________________________Rejection Reason______________________________ */}
        <div>
          <h4 className="text-main-color text-xl font-medium">Reject Reason</h4>
          <p className="xl:max-w-xl max-w-md border border-gray-400 p-3 pb-10 mt-3 rounded">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* _____________________________________Nurse Details and Suggested Nurse______________________________ */}
        <div>
          <h4 className="text-main-color text-xl font-medium mb-3">
            Reject Nurse
          </h4>
          {/* _________________ Nurse details_________ */}
          <div className="p-3 bg-[#c4ebe9] rounded">
            <div className="flex justify-between items-center  gap-x-3 mt-3">
              <div className="space-y-1">
                <Image
                  src={nurseImage}
                  alt="user-image"
                  width={1200}
                  height={1200}
                  className="size-32"
                ></Image>
                <div className="flex gap-x-2 justify-center items-center">
                  <h1 className="font-medium">Kane Smith</h1>
                  <div className="flex gap-x-1 items-center justify-center">
                    <Star size={16} fill="#8D2E7D" color="#8D2E7D" />
                    <p>4.5</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-main-color font-medium text-lg text-center mb-2s">
                  Main Nurse
                </h4>
                <div className="flex xl:gap-x-10 gap-6 justify-between">
                  <h5>Specialist :</h5>
                  <p className="text-main-color font-medium">CNS</p>
                </div>
                <div className="flex xl:gap-x-10 gap-6 justify-between">
                  <h5>Experience :</h5>
                  <p className="text-main-color font-medium">6 years</p>
                </div>
                <div className="flex xl:gap-x-10 gap-6 justify-between">
                  <h5>Total Consultaion :</h5>
                  <p className="text-main-color font-medium">12</p>
                </div>
                <div className="flex xl:gap-x-10 gap-6 justify-between">
                  <h5>Patient :</h5>
                  <p className="text-main-color font-medium">02</p>
                </div>
              </div>
            </div>
            {/* ____________________________________ Details Button ______________________________ */}
            <Button
              onClick={() => {
                setOpenNurseDetail(true);
              }}
              className="w-full mt-3"
            >
              See Details
            </Button>
          </div>

          {/* ____________________________________Suggested Nurse ______________________________ */}
          <h4 className="text-main-color text-xl font-medium mb-3 mt-5">
            Suggested Nurse
          </h4>

          <div className="p-2 border border-gray-400 rounded-lg space-y-2">
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Full Name: </h5>
              <p>James Tracy</p>
            </div>
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Gander: </h5>
              <p>Male</p>
            </div>
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Specialist: </h5>
              <p>Critical care nursing</p>
            </div>
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Email: </h5>
              <p>james1234@gmail.com</p>
            </div>
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Phone Number: </h5>
              <p>+789 5669 0256</p>
            </div>
            <div className="flex xl:gap-x-10 gap-6 justify-between">
              <h5>Address: </h5>
              <p>New York,USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* ______________________________________Action Buttons____________________________  */}
      <div className="flex justify-center mt-10 gap-3 flex-wrap">
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#8d2e7d",
            border: "1px solid #8d2e7d",
          }}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button className="flex-1">Reassign</Button>
      </div>
      <NurseDetailsModal
        open={openNurseDetails}
        setOpen={setOpenNurseDetail}
      ></NurseDetailsModal>
    </Modal>
  );
};

export default UserCancelModal;
