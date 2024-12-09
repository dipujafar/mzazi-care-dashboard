"use client";
import { message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import VendorDetailsModal from "./VendorDetailsModal";

type TDataType = {
  key?: number;
  name: string;
  email: string;
  date: string;
  phone?: string;
};
const data: TDataType[] = Array.from({length: 25}).map((data, inx)=>(
  {
    key: inx + 1,
    name: "James Tracy",
    email: "james1234@gmail.comm",
    phone: "12345678",
    date: "11 Oct, 2024",
  }
))

const confirmBlock: PopconfirmProps['onConfirm'] = (e) => {
  console.log(e);
  message.success('Blocked the subadmin');
};


const VendorTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SI",
      dataIndex: "key",
      render: (value) => value,
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
            color="#CD0335"
            onClick={() => setOpen(!open)}
          />
          <Popconfirm
            title="Block the subadmin"
            description="Are you sure to block this subadmin?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <CgUnblock size={20} color="#009A22" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={15}></DataTable>
      <VendorDetailsModal open={open} setOpen={setOpen}></VendorDetailsModal>
    </div>
  );
};

export default VendorTable;
