import { Button, Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const RequestDetailsModal = ({ open, setOpen }: TPropsType) => {
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
      <div className="pb-10">
        <h4 className="text-center text-2xl font-medium">
          Medicine Request Details
        </h4>
        <div className="mt-10">
          <div className="flex gap-x-2 justify-between">
            <h4>User Name</h4>
            <p className="font-medium">James</p>
          </div>
          <Divider style={{ color: "#8d2e7d" }}></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Patient Name: </h4>
            <p className="font-medium">Kane Smith</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Relationship: </h4>
            <p className="font-medium">Father</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Phone Number:</h4>
            <p className="font-medium">+1 234 567 890</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Medicine Name:</h4>
            <p className="font-medium">SuperItra</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Address:</h4>
            <p className="font-medium">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4> Date:</h4>
            <p className="font-medium">01-24-2024</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-3 flex-wrap">
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#8d2e7d",
              border: "1px solid #8d2e7d",
            }}
            className="flex-1"
          >
            Pending
          </Button>
          <Button className="flex-1">Delivered</Button>
        </div>
      </div>
    </Modal>
  );
};

export default RequestDetailsModal;
