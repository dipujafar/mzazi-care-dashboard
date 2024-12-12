"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";

import { useState } from "react";
import DataTable from "@/utils/DataTable";
import UserDetails from "../user/UserDetails";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  type: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  type: "User",
  date: "11 Oct, 2024",
}));

const LatestUser = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "Full Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Join Date",
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
      <h1 className="py-5 px-5 text-2xl text-black/80">Latest Users</h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <UserDetails open={open} setOpen={setOpen}></UserDetails>
    </div>
  );
};

export default LatestUser;
