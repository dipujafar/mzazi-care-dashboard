import { Button, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const NurseRejectModal = ({ open, setOpen }: TPropsType) => {
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
      <div>
        <h1 className="text-center text-main-color font-medium text-xl mb-5">
          Rejection reason
        </h1>
        <p className="max-w-md mt-2 border rounded-md p-2 border-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
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
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button className="flex-1">Approve</Button>
      </div>
    </Modal>
  );
};

export default NurseRejectModal;
