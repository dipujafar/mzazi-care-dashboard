"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import NurseRequestDetailsModal from "./NurseRequestDetailsModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  phone: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  phone: "12345678",
  date: "11 Oct, 2024",
}));

const NurseRequestData = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Phone Number",
      dataIndex: "phone",
    },

    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div>
          <MdOutlineErrorOutline
            size={20}
            color="#8D2E7D"
            onClick={() => setOpen(!open)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#EEE0EC] rounded-md">
      <h1 className="py-5 px-5 text-2xl text-black/80">Request List</h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <NurseRequestDetailsModal
        open={open}
        setOpen={setOpen}
      ></NurseRequestDetailsModal>
    </div>
  );
};

export default NurseRequestData;
