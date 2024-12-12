"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";

import { useState } from "react";
import DataTable from "@/utils/DataTable";
import UserDetails from "../user/UserDetails";
import checkIcon from "@/assets/icons/checkIcon.png";
import cancelIcon from "@/assets/icons/cancelIcon.png";
import Image from "next/image";
import { ArrowDownWideNarrowIcon } from "lucide-react";
import UserCancelModal from "./UserCancelModal";
import NurseRejectModal from "./NurseRejectModal";
import Link from "next/link";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  userStatus: string;
  mainNurseStatus: string;
  backupNurseStatus: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  phone: "12345678",
  email: "james1234@gmail.comm",
  date: "11 Oct, 2024",
  userStatus: inx == 2 || inx == 4 ? "rejected" : "accepted",
  mainNurseStatus: inx == 5 || inx == 3 ? "rejected" : "accepted",
  backupNurseStatus: inx == 6 || inx == 1 ? "rejected" : "accepted",
}));

const NursesRequestData = () => {
  const [openUserReject, setOpenUserReject] = useState(false);
  const [openNurseReject, setOpenNurseReject] = useState(false);

  const [query, setQuery] = useState("");

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "User Status",
      dataIndex: "userStatus",
      render: (value) =>
        value == "rejected" ? (
          <div className="flex gap-x-1 items-center">
            <div className="py-1 px-4 rounded-full bg-[#ffc6c6] w-fit text-[#e40e35] flex gap-x-1 items-center capitalize">
              <Image
                src={cancelIcon}
                alt="check-icon"
                className="size-4"
              ></Image>
              {value}
            </div>
            <div className="cursor-pointer">
              <MdOutlineErrorOutline
                size={20}
                color="#8D2E7D"
                onClick={() => setOpenUserReject(!openUserReject)}
              />
            </div>
          </div>
        ) : (
          <div className="py-1 px-4 rounded-full bg-[#e3f0e5] w-fit text-[#00c01f] flex gap-x-1 items-center capitalize">
            <Image src={checkIcon} alt="check-icon" className="size-4"></Image>
            {value}
          </div>
        ),

      // filter main nurse or backup nurse

      filters: [
        {
          text: "Main Nurse",
          value: "mainNurse",
        },
        {
          text: "Backup Nurse",
          value: "backupNurse",
        },
      ],
      filterIcon: (value) => (
        <ArrowDownWideNarrowIcon
          size={20}
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) =>
        record.userStatus.indexOf(value as string) === 0,
    },

    // main nurse status
    {
      title: "Main Nurse Status",
      dataIndex: "mainNurseStatus",
      render: (value) =>
        value == "rejected" ? (
          <div className="flex gap-x-1 items-center">
            <div className="py-1 px-4 rounded-full bg-[#ffc6c6] w-fit text-[#e40e35] flex gap-x-1 items-center capitalize">
              <Image
                src={cancelIcon}
                alt="check-icon"
                className="size-4"
              ></Image>
              {value}
            </div>
            <div>
              <MdOutlineErrorOutline
                size={20}
                color="#8D2E7D"
                onClick={() => setOpenNurseReject(true)}
              />
            </div>
          </div>
        ) : (
          <div className="py-1 px-4 rounded-full bg-[#e3f0e5] w-fit text-[#00c01f] flex gap-x-1 items-center capitalize">
            <Image src={checkIcon} alt="check-icon" className="size-4"></Image>
            {value}
          </div>
        ),
    },
    // backup nurse status
    {
      title: "Backup Nurse Status",
      dataIndex: "backupNurseStatus",
      render: (value) =>
        value == "rejected" ? (
          <div className="flex gap-x-1 items-center">
            <div className="py-1 px-4 rounded-full bg-[#ffc6c6] w-fit text-[#e40e35] flex gap-x-1 items-center capitalize">
              <Image
                src={cancelIcon}
                alt="check-icon"
                className="size-4"
              ></Image>
              {value}
            </div>
            <div>
              <MdOutlineErrorOutline
                size={20}
                color="#8D2E7D"
                onClick={() => setOpenNurseReject(true)}
              />
            </div>
          </div>
        ) : (
          <div className="py-1 px-4 rounded-full bg-[#e3f0e5] w-fit text-[#00c01f] flex gap-x-1 items-center capitalize">
            <Image src={checkIcon} alt="check-icon" className="size-4"></Image>
            {value}
          </div>
        ),
    },

    {
      title: "Request Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Link href={"/request-nurse"}>
          <MdOutlineErrorOutline
            size={20}
            color="#8D2E7D"
            onClick={() => setOpenUserReject(!open)}
          />
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-[#EEE0EC] rounded-md">
      <h1 className="py-5 px-5 text-2xl text-black/80">
        Nursing Service Request
      </h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <UserCancelModal
        open={openUserReject}
        setOpen={setOpenUserReject}
      ></UserCancelModal>
      {/* nurse reject modal */}
      <NurseRejectModal
        open={openNurseReject}
        setOpen={setOpenNurseReject}
      ></NurseRejectModal>
    </div>
  );
};

export default NursesRequestData;
