"use client";
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";

import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import AmbulanceProviderDetailsModal from "./AmbulanceProviderDetailsModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  phone: string;
  date: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  phone: "12345678",
  date: "11 Oct, 2024",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Blocked the ambulance provider");
};

const AmbulanceProviderData = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "Provider Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Phone number",
      dataIndex: "phone",
    },
    {
      title: "Join Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex gap-1 ">
          <MdOutlineErrorOutline
            size={20}
            color="#862c77"
            onClick={() => setOpen(!open)}
          />
          <Popconfirm
            title="Block the user"
            description="Are you sure to block this user?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <CgUnblock size={20} color="#CD0335" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#EEE0EC] rounded-md">
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="  text-2xl text-black/80">Ambulance Provider List</h1>
        <Input
          style={{ width: "220px", borderRadius: "20px" }}
          placeholder="Search"
        ></Input>
      </div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <AmbulanceProviderDetailsModal
        open={open}
        setOpen={setOpen}
      ></AmbulanceProviderDetailsModal>
    </div>
  );
};

export default AmbulanceProviderData;
