import { Divider, Modal } from "antd";
import Image from "next/image";
import { RiCloseLargeLine } from "react-icons/ri";
import fileImage from "@/assets/image/pdf.png";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const NurseDetails = ({ open, setOpen }: TPropsType) => {
  const handleDownloadFile = () => {
    const link = document.createElement("a");
    link.href = "path/to/yourfile.pdf'";
    link.setAttribute("download", "yourfile.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <h4 className="text-center text-2xl font-medium">Request Details</h4>
        <div className="mt-10">
          <div className="flex gap-x-2 justify-between">
            <h4>User Name</h4>
            <p className="font-medium">James</p>
          </div>
          <Divider style={{ color: "#8d2e7d" }}></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Email:</h4>
            <p className="font-medium">jamestracy@gmail.com</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Phone Number:</h4>
            <p className="font-medium">+1 234 567 890</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Specialist</h4>
            <p className="font-medium">Clinical Spc. Nurse</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Experience:</h4>
            <p className="font-medium">6 Years</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4> Working days:</h4>
            <p className="font-medium">Sat-Fri</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Working times:</h4>
            <p className="font-medium">08:00 am-07:00 pm</p>
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
            <h4>Nationality :</h4>
            <p className="font-medium">USA</p>
          </div>
          <Divider></Divider>

          <div className="flex gap-x-2 justify-between">
            <h4>Joining date :</h4>
            <p className="font-medium">16 Aug 2024</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>CV :</h4>
            <div
              onClick={handleDownloadFile}
              className="bg-gray-300 cursor-pointer rounded w-fit "
            >
              <div className="bg-primary-green p-1 rounded-full">
                <Image
                  src={fileImage}
                  alt="pdf_image"
                  className="size-8"
                ></Image>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Document :</h4>
            <div
              onClick={handleDownloadFile}
              className="bg-gray-300 cursor-pointer rounded w-fit "
            >
              <div className="bg-primary-green p-1 rounded-full">
                <Image
                  src={fileImage}
                  alt="pdf_image"
                  className="size-8"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NurseDetails;
