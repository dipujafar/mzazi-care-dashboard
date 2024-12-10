import { Button, Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const EarningDetailsModal = ({ open, setOpen }: TPropsType) => {
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
          Transaction Details
        </h4>
        <div className="mt-10">
          <div className="flex gap-x-2 justify-between">
            <h4>Transaction ID :</h4>
            <p className="font-medium">#12345678</p>
          </div>
          <Divider style={{ color: "#8d2e7d" }}></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Date : </h4>
            <p className="font-medium">01-24-2024</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>User name :</h4>
            <p className="font-medium">James</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>A/C number :</h4>
            <p className="font-medium">**** **** **** *545</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4> A/C holder name :</h4>
            <p className="font-medium">James</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4> Transaction amount :</h4>
            <p className="font-medium">$260</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-5 flex-wrap">
          <Button className="flex-1">Download</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EarningDetailsModal;
