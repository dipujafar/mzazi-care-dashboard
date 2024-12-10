"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import EarningDetailsModal from "./EarningDetailsModal";

type TDataType = {
  key?: number;
  tnx: string;
  name: string;
  email: string;
  date: string;
  amount: number;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  tnx: "12345678",
  name: "James Tracy",
  email: "james1234@gmail.comm",
  amount: 200,
  date: "11 Oct, 2024",
}));

const EarningData = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#Tr.ID",
      dataIndex: "tnx",
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
      title: "Amount",
      dataIndex: "amount",
      render: (value) => `$${value}`,
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
      <h1 className="py-5 px-5 text-2xl text-black/80">Transactions</h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <EarningDetailsModal open={open} setOpen={setOpen}></EarningDetailsModal>
    </div>
  );
};

export default EarningData;
