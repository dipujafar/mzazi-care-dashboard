"use client";
import { TableProps } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import DataTable from "@/utils/DataTable";

type TDataType = {
  key: number;
  name: string;
  email: string;
  phone?: string;
  newEmail?: string;
};
const data: TDataType[] = Array.from({ length: 24 }).map((data, inx) => ({
  key: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  phone: "12345678",
  newEmail: "james1234@gmail.com",
  category: "Restaurant",
}));

const ResetPasswordRequestTable = () => {

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SI",
      dataIndex: "key",
    },
    {
      title: "Vendor Name",
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
      title: "New Password Email",
      dataIndex: "newEmail",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <button
        className="px-4 py-1 bg-gradient-to-r from-[#CD0335] to-[#E53B5D] hover:from-[#c29cb8] hover:to-[#c2445d] rounded-full text-white font-bold flex items-center gap-1"
      >
        <FaCheckCircle />
        Send Password
      </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={15}></DataTable>
    </div>
  );
};

export default ResetPasswordRequestTable;