import { Divider, Modal } from "antd";
import AddRestaurantModal from "./AddRestaurantModal";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const VendorDetailsModal = ({ open, setOpen }: TPropsType) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
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
          className="w-12 h-12 bg-main-color  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <RiCloseLargeLine
            size={18}
            color="#fff"
            className="absolute top-1/3 left-1/3"
          />
        </div>
        <div className="pb-20">
          <h4 className="text-center text-2xl font-medium">Vendor Details</h4>
          <div className="mt-10">
            <div className="flex justify-between">
              <h4>Date :</h4>
              <p className="font-medium">01-24-2024</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>User name :</h4>
              <p className="font-medium">James Tracy</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Shop Owner :</h4>
              <p className="font-medium">James Tracy</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Restaurant name :</h4>
              <p className="font-medium">Start Restaurant</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Email :</h4>
              <p className="font-medium">james1234@gmail.com</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Open-Closed Time :</h4>
              <p className="font-medium">10:00 AM-11:00 PM</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Phone Number :</h4>
              <p className="font-medium">+1-800-925-6278</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Whatsapp Number :</h4>
              <p className="font-medium">+1-800-925-6278</p>
            </div>
            <Divider></Divider>
            <div className="flex justify-between">
              <h4>Address :</h4>
              <p className="font-medium">New York,USA</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setOpenModal(true);
            setOpen(false);
          }}
          className="px-4 py-3 bg-gradient-to-r from-[#CD0335] to-[#E53B5D] hover:from-[#d18692] hover:to-[#c2445d] rounded-md text-white font-bold w-full"
        >
          Add Restaurant/Market
        </button>
      </Modal>
      <AddRestaurantModal
        open={openModal}
        setOpen={setOpenModal}
      ></AddRestaurantModal>
    </>
  );
};

export default VendorDetailsModal;
