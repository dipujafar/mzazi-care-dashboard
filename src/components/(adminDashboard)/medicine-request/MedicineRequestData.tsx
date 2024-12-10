"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import RequestDetailsModal from "./RequestDetailsModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  patient: string;
  relation: string;
  phone: string;
  email: string;

  medicineName: string;
  status: "delivered";
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  patient: "Kane Smith",
  relation: "Brother",
  phone: "12345678",
  email: "james1234@gmail.comm",
  medicineName: "SuperItra",
  status: "delivered",
}));

const MedicineRequestData = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "SL",
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
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Patient Name",
      dataIndex: "patient",
    },
    {
      title: "Relation",
      dataIndex: "relation",
    },
    {
      title: "Medicine Name",
      dataIndex: "medicineName",
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
      <h1 className="py-5 px-5 text-2xl text-black/80">Medicine Request</h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <RequestDetailsModal open={open} setOpen={setOpen}></RequestDetailsModal>
    </div>
  );
};

export default MedicineRequestData;
